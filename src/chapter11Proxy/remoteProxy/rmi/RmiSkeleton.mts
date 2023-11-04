import { Socket } from 'net';

import { isJsonable } from '../state/State.mjs';
import { MessageTypes, SkeletonToServerMethodInvocationResultMessage } from './RmiMessages.mjs';
import { RmiMessenger } from './RmiMessenger.mjs';
import { RmiServer } from './RmiServer.mjs';
import { generateId } from './utils.mjs';

export class RmiSkeleton {
  private messenger: RmiMessenger;

  constructor(
    private readonly skeleton: Record<string, any>,
    private readonly name: string,
    private readonly isDebugMode: boolean,
  ) {
    this.messenger = new RmiMessenger(new Socket(), name, isDebugMode);
    this.handleInvokeMethodOnSkeletonMessage();
  }

  private handleInvokeMethodOnSkeletonMessage() {
    this.messenger.on(MessageTypes.ServerToSkeletonInvokeMethodOnSkeleton, async (message) => {
      this.isDebugMode &&
        console.log(`Invoking the method ${message.methodName} on the skeleton ${this.name} with args`, message.args);

      let result: any;

      try {
        result = this.skeleton[message.methodName](...message.args);

        if (isJsonable(result)) {
          result = result.toJson();
        }

        this.isDebugMode &&
          console.log(
            `The method ${message.methodName} was invoked on the skeleton ${this.name} and returned data:`,
            result,
          );
      } catch (error) {
        this.isDebugMode &&
          console.log(`The skeleton ${this.name} could not invoke the method ${message.methodName}`, error);
        return;
      }

      const skeletonToServerMethodInvocationResultMessage: SkeletonToServerMethodInvocationResultMessage = {
        type: MessageTypes.SkeletonToServerMethodInvocationResult,
        result,
        id: generateId(),
        invocationId: message.invocationId,
      };

      await RmiMessenger.sendMessage(skeletonToServerMethodInvocationResultMessage, this.messenger.socket);
    });
  }

  public async rebind() {
    await this.messenger.connect();

    this.isDebugMode &&
      console.log(`The skeleton ${this.name} was connected to the RMI server on ${RmiServer.socketPath}`);

    const skeletonToServerSkeletonAnnouncementMessage = {
      type: MessageTypes.SkeletonToServerSkeletonAnnouncement,
      name: this.name,
      id: generateId(),
    };

    await this.messenger.sendMessageAndWaitForResponse(skeletonToServerSkeletonAnnouncementMessage);

    this.isDebugMode && console.log(`The skeleton ${this.name} was bound to the RMI server`);
  }
}
