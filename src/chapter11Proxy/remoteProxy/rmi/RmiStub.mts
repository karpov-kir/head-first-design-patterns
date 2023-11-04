import { Socket } from 'net';

import {
  isServerToStubSkeletonInvocationResultMessage,
  MessageTypes,
  StubToServerInvokeMethodOnSkeletonMessage,
  StubToServerLookUpSkeletonMessage,
} from './RmiMessages.mjs';
import { RmiMessenger } from './RmiMessenger.mjs';
import { RmiServer } from './RmiServer.mjs';
import { generateId } from './utils.mjs';

export class RmiStub {
  private messenger: RmiMessenger;

  constructor(
    private readonly name: string,
    private readonly skeletonName: string,
    private readonly isDebugMode: boolean,
  ) {
    this.messenger = new RmiMessenger(new Socket(), name, isDebugMode);
  }

  public async lookUp() {
    await this.messenger.connect();

    this.isDebugMode && console.log(`The stub ${this.name} was connected to the RMI server on ${RmiServer.socketPath}`);

    const stubToServerLookUpSkeletonMessage: StubToServerLookUpSkeletonMessage = {
      type: MessageTypes.StubToServerLookUpSkeleton,
      skeletonName: this.skeletonName,
      id: generateId(),
    };

    await this.messenger.sendMessageAndWaitForResponse(stubToServerLookUpSkeletonMessage);

    this.isDebugMode && console.log(`The stub ${this.name} found the skeleton ${this.skeletonName} on the RMI server`);
  }

  public async invoke(methodName: string, args: any[]): Promise<any> {
    const stubToSkeletonInvokeMethodOnSkeletonMessage: StubToServerInvokeMethodOnSkeletonMessage = {
      type: MessageTypes.StubToServerInvokeMethodOnSkeleton,
      methodName,
      args,
      skeletonName: this.skeletonName,
      id: generateId(),
      invocationId: generateId(),
    };

    const response = await this.messenger.sendMessageAndWaitForResponse(stubToSkeletonInvokeMethodOnSkeletonMessage);

    if (!isServerToStubSkeletonInvocationResultMessage(response)) {
      this.isDebugMode &&
        console.log(`The stub ${this.name} received an unexpected message from the RMI server`, response);
      return;
    }

    this.isDebugMode &&
      console.log(
        `The stub ${this.name} invoked the method ${methodName} on the skeleton ${this.name} and got a response back:`,
        response,
      );

    return response.result;
  }
}
