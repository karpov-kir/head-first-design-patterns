import Crypto from 'crypto';
import { createServer, Socket } from 'net';
import os from 'os';
import path from 'path';

import {
  isMessage,
  isSkeletonToServerMethodInvocationResultMessage,
  isSkeletonToServerSkeletonAnnouncementMessage,
  isStubToServerInvokeMethodOnSkeletonMessage,
  isStubToServerLookUpSkeletonMessage,
  Message,
  MessageTypes,
  ServerToSkeletonInvokeMethodOnSkeletonMessage,
  ServerToSkeletonSkeletonBoundMessage,
  ServerToStubSkeletonInvocationResultMessage,
  ServerToStubSkeletonLookedUpMessage,
  SkeletonToServerMethodInvocationResultMessage,
  SkeletonToServerSkeletonAnnouncementMessage,
  StubToServerInvokeMethodOnSkeletonMessage,
  StubToServerLookUpSkeletonMessage,
} from './RmiMessages.mjs';
import { RmiMessenger } from './RmiMessenger.mjs';
import { generateId } from './utils.mjs';

export class RmiServer {
  public static readonly socketPath = path.join(
    os.tmpdir(),
    `rmiServer.${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.sock`,
  );
  public readonly skeletonsMap = new Map<
    // Skeleton name
    string,
    Socket
  >();
  public readonly invokedMethodMap = new Map<
    // Invocation ID
    string,
    {
      stubSocket: Socket;
      stubMessageId: string;
    }
  >();
  private readonly server = createServer();

  private readonly connections: Socket[] = [];

  constructor(private readonly isDebugMode: boolean) {
    this.attachExitHandler();
  }

  private attachExitHandler() {
    const exitHandler = (
      options: {
        isExit?: boolean;
        isCleanup?: boolean;
      },
      exitCodeOrError?: number | Error,
    ) => {
      this.isDebugMode && console.log(`Exit signal detected, exit code`, exitCodeOrError);

      this.close();

      if (options.isExit) {
        process.exit();
      }
    };

    // Do something when app is closing
    process.on('exit', exitHandler.bind(this, { isCleanup: true }));

    // Catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(this, { isExit: true }));

    // Catches "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', exitHandler.bind(this, { isExit: true }));
    process.on('SIGUSR2', exitHandler.bind(this, { isExit: true }));

    // Catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(this, { isExit: true }));
  }

  public close() {
    if (!this.server.listening) {
      return;
    }

    this.isDebugMode && console.log('Closing the RMI server');

    this.connections.forEach((socket) => {
      socket.destroy();
    });

    return new Promise<void>((resolve, reject) => {
      this.server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }

  private getSkeletonSocketOrFail(skeletonName: string) {
    const skeletonSocket = this.skeletonsMap.get(skeletonName);
    if (!skeletonSocket) {
      throw new Error(`Could not look up the skeleton ${skeletonName} on the RMI server`);
    }

    return skeletonSocket;
  }

  private async handleSkeletonAnnouncementMessage(
    message: SkeletonToServerSkeletonAnnouncementMessage,
    socket: Socket,
  ) {
    this.skeletonsMap.set(message.name, socket);

    this.isDebugMode && console.log(`The skeleton ${message.name} was bound on the RMI server`);

    const serverToSkeletonSkeletonBoundMessage: ServerToSkeletonSkeletonBoundMessage = {
      type: MessageTypes.ServerToSkeletonSkeletonBound,
      id: generateId(),
      respondToMessageId: message.id,
    };

    await RmiMessenger.sendMessage(serverToSkeletonSkeletonBoundMessage, socket);
  }

  private async handleStubLookUpSkeletonMessage(message: StubToServerLookUpSkeletonMessage, socket: Socket) {
    this.getSkeletonSocketOrFail(message.skeletonName);

    const serverToStubSkeletonLookedUpMessage: ServerToStubSkeletonLookedUpMessage = {
      type: MessageTypes.ServerToStubSkeletonLookedUpMessage,
      id: generateId(),
      respondToMessageId: message.id,
    };

    await RmiMessenger.sendMessage(serverToStubSkeletonLookedUpMessage, socket);
  }

  private async handleStubInvokeMethodOnSkeletonMessage(
    message: StubToServerInvokeMethodOnSkeletonMessage,
    socket: Socket,
  ) {
    const skeletonSocket = this.getSkeletonSocketOrFail(message.skeletonName);

    const serverToSkeletonInvokeMethodOnSkeletonMessage: ServerToSkeletonInvokeMethodOnSkeletonMessage = {
      type: MessageTypes.ServerToSkeletonInvokeMethodOnSkeleton,
      id: generateId(),
      methodName: message.methodName,
      args: message.args,
      invocationId: message.invocationId,
    };

    this.invokedMethodMap.set(message.invocationId, {
      stubSocket: socket,
      stubMessageId: message.id,
    });

    await RmiMessenger.sendMessage(serverToSkeletonInvokeMethodOnSkeletonMessage, skeletonSocket);
  }

  private async handleSkeletonInvocationResultMessage(
    message: SkeletonToServerMethodInvocationResultMessage,
    _socket: Socket,
  ) {
    const stubInvocationData = this.invokedMethodMap.get(message.invocationId);

    if (!stubInvocationData) {
      this.isDebugMode &&
        console.log(
          `Could not find a stub invocation data for the invocation ID ${message.invocationId} on the RMI server`,
        );

      return;
    }

    const { stubMessageId, stubSocket } = stubInvocationData;
    const serverToStubSkeletonInvocationResultMessage: ServerToStubSkeletonInvocationResultMessage = {
      type: MessageTypes.ServerToStubSkeletonInvocationResultMessage,
      id: generateId(),
      result: message.result,
      respondToMessageId: stubMessageId,
    };

    await RmiMessenger.sendMessage(serverToStubSkeletonInvocationResultMessage, stubSocket);
  }

  private handleMessage(message: Message, socket: Socket) {
    if (isSkeletonToServerSkeletonAnnouncementMessage(message)) {
      this.handleSkeletonAnnouncementMessage(message, socket);
      return;
    }

    if (isStubToServerLookUpSkeletonMessage(message)) {
      this.handleStubLookUpSkeletonMessage(message, socket);
      return;
    }

    if (isStubToServerInvokeMethodOnSkeletonMessage(message)) {
      this.handleStubInvokeMethodOnSkeletonMessage(message, socket);
      return;
    }

    if (isSkeletonToServerMethodInvocationResultMessage(message)) {
      this.handleSkeletonInvocationResultMessage(message, socket);
      return;
    }

    this.isDebugMode && console.log('Could not find a handler for a received message on the RMI server', message);
  }

  private handleRawData(rawData: any, socket: Socket) {
    try {
      const parsedData = JSON.parse(rawData.toString());
      this.isDebugMode && console.log(`Data was received on the RMI server from a connection`, parsedData);

      if (!isMessage(parsedData)) {
        this.isDebugMode &&
          console.log(
            'Data was received and parsed on the RMI server from a connection but could not be verified',
            parsedData,
          );

        return;
      }

      this.handleMessage(parsedData, socket);
    } catch (error) {
      this.isDebugMode &&
        console.log(`Data was received on the RMI server from a connection but could not be parsed`, rawData);
    }
  }

  public async serve() {
    await this.close();

    this.server.on('connection', (socket) => {
      this.isDebugMode && console.log(`A new connection to the RMI server`);

      this.connections.push(socket);

      socket.on('data', (rawData: Buffer) => {
        this.handleRawData(rawData, socket);
      });

      socket.on('close', () => {
        this.isDebugMode && console.log(`A connection was closed on the RMI server`);

        this.connections.filter((existingSocket) => existingSocket !== socket);
      });

      socket.on('error', (error) => {
        this.isDebugMode && console.log(`An error occurred on the RMI server: ${error.message}`);
      });
    });

    return new Promise<void>((resolve) => {
      this.server.listen(RmiServer.socketPath, () => {
        this.isDebugMode && console.log(`The RMI server is listening on ${RmiServer.socketPath}`);
        resolve();
      });
    });
  }
}
