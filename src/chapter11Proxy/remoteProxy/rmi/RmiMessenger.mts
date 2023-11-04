import { Socket } from 'net';

import { isMessage, Message, MessageTypes, ServerToSkeletonInvokeMethodOnSkeletonMessage } from './RmiMessages.mjs';
import { RmiServer } from './RmiServer.mjs';

interface Deferred {
  promise: Promise<unknown>;
  resolve: (value: unknown) => void;
  reject: (error: unknown) => void;
}

export class RmiMessenger {
  private messageDeferredMap = new Map<
    // Message ID
    string,
    Deferred
  >();

  public listenersMap = new Map<
    // Message type
    string,
    (message: any) => void
  >();

  public static async sendMessage(message: Message, socket: Socket) {
    return new Promise<void>((resolve, reject) => {
      socket.write(JSON.stringify(message), (error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }

  constructor(
    public readonly socket: Socket,
    public readonly name: string,
    private readonly isDebugMode: boolean,
  ) {
    socket.on('data', (rawData: any) => {
      try {
        const parsedData = JSON.parse(rawData.toString());
        this.isDebugMode && console.log(`Data was received on the ${name} socket`, parsedData);

        if (!isMessage(parsedData)) {
          this.isDebugMode &&
            console.log(`Data was received and parsed on the ${name} socket but could not be verified`, parsedData);

          return;
        }

        this.handleMessage(parsedData);
      } catch (error) {
        this.isDebugMode && console.log(`Data was received on the ${name} socket but could not be parsed`, rawData);
      }
    });
  }

  private maybeResolveDeferred(message: Message) {
    if (!message.respondToMessageId) {
      return;
    }

    const deferred = this.messageDeferredMap.get(message.respondToMessageId);

    if (deferred) {
      deferred.resolve(message);
    }

    this.messageDeferredMap.delete(message.id);
  }

  private maybeInvokeListener(message: Message) {
    const listener = this.listenersMap.get(message.type);

    if (listener) {
      listener(message);
    }
  }

  private handleMessage(message: Message) {
    this.maybeResolveDeferred(message);
    this.maybeInvokeListener(message);
  }

  public connect() {
    return new Promise<void>((resolve) => {
      this.socket.connect(RmiServer.socketPath, () => {
        resolve();
      });
    });
  }

  public async sendMessageAndWaitForResponse(message: Message) {
    const deferred = makeDeferred();

    this.messageDeferredMap.set(message.id, deferred);
    await RmiMessenger.sendMessage(message, this.socket);

    return deferred.promise;
  }

  public on(
    messageType: MessageTypes.ServerToSkeletonInvokeMethodOnSkeleton,
    listener: (data: ServerToSkeletonInvokeMethodOnSkeletonMessage) => void,
  ): void;
  public on(messageType: string, listener: (data: any) => void): void {
    this.listenersMap.set(messageType, listener);
  }
}

const makeDeferred = () => {
  const deferred: Deferred = {} as Deferred;

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
};
