export enum MessageTypes {
  SkeletonToServerSkeletonAnnouncement = 'skeletonToServerSkeletonAnnouncement',
  StubToServerLookUpSkeleton = 'stubToServerLookUpSkeleton',
  ServerToSkeletonSkeletonBound = 'serverToSkeletonSkeletonBound',
  ServerToStubSkeletonLookedUpMessage = 'serverToStubSkeletonLookedUpMessage',
  StubToServerInvokeMethodOnSkeleton = 'stubToServerInvokeMethodOnSkeleton',
  ServerToSkeletonInvokeMethodOnSkeleton = 'serverToSkeletonInvokeMethodOnSkeleton',
  SkeletonToServerMethodInvocationResult = 'skeletonToServerMethodInvocationResult',
  ServerToStubSkeletonInvocationResultMessage = 'serverToStubSkeletonInvocationResultMessage',
}

export interface Message {
  id: string;
  type: MessageTypes;
  respondToMessageId?: string;
}

export interface SkeletonToServerSkeletonAnnouncementMessage extends Message {
  type: MessageTypes.SkeletonToServerSkeletonAnnouncement;
  name: string;
}

export interface StubToServerLookUpSkeletonMessage extends Message {
  type: MessageTypes.StubToServerLookUpSkeleton;
  skeletonName: string;
}

export interface ServerToSkeletonSkeletonBoundMessage extends Message {
  type: MessageTypes.ServerToSkeletonSkeletonBound;
}

export interface ServerToStubSkeletonLookedUpMessage extends Message {
  type: MessageTypes.ServerToStubSkeletonLookedUpMessage;
}

export interface StubToServerInvokeMethodOnSkeletonMessage extends Message {
  type: MessageTypes.StubToServerInvokeMethodOnSkeleton;
  methodName: string;
  args: any[];
  skeletonName: string;
  invocationId: string;
}

export interface ServerToSkeletonInvokeMethodOnSkeletonMessage extends Message {
  type: MessageTypes.ServerToSkeletonInvokeMethodOnSkeleton;
  methodName: string;
  args: any[];
  invocationId: string;
}

export interface SkeletonToServerMethodInvocationResultMessage extends Message {
  type: MessageTypes.SkeletonToServerMethodInvocationResult;
  result: any;
  invocationId: string;
}

export interface ServerToStubSkeletonInvocationResultMessage extends Message {
  type: MessageTypes.ServerToStubSkeletonInvocationResultMessage;
  result: any;
}

export const isMessage = (data: any): data is Message =>
  Boolean(data) && typeof data === 'object' && typeof data.id === 'string';

export const isSkeletonToServerSkeletonAnnouncementMessage = (
  data: any,
): data is SkeletonToServerSkeletonAnnouncementMessage =>
  Boolean(data) && typeof data === 'object' && data.type === MessageTypes.SkeletonToServerSkeletonAnnouncement;

export const isStubToServerLookUpSkeletonMessage = (data: any): data is StubToServerLookUpSkeletonMessage =>
  Boolean(data) && typeof data === 'object' && data.type === MessageTypes.StubToServerLookUpSkeleton;

export const isStubToServerInvokeMethodOnSkeletonMessage = (
  data: any,
): data is StubToServerInvokeMethodOnSkeletonMessage =>
  Boolean(data) && typeof data === 'object' && data.type === MessageTypes.StubToServerInvokeMethodOnSkeleton;

export const isSkeletonToServerMethodInvocationResultMessage = (
  data: any,
): data is SkeletonToServerMethodInvocationResultMessage =>
  Boolean(data) && typeof data === 'object' && data.type === MessageTypes.SkeletonToServerMethodInvocationResult;

export const isServerToStubSkeletonInvocationResultMessage = (
  data: any,
): data is ServerToStubSkeletonInvocationResultMessage =>
  Boolean(data) && typeof data === 'object' && data.type === MessageTypes.ServerToStubSkeletonInvocationResultMessage;
