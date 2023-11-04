import { RemoteGumballMachine } from '../gumballMachine/GumballMachine.mjs';
import { RmiStub } from './RmiStub.mjs';

export class RmiGumballMachine implements RemoteGumballMachine {
  constructor(private readonly rmiStub: RmiStub) {}

  public async getCount() {
    return this.rmiStub.invoke('getCount', []);
  }

  public async getLocation() {
    return this.rmiStub.invoke('getLocation', []);
  }

  public async getState() {
    return this.rmiStub.invoke('getState', []);
  }
}
