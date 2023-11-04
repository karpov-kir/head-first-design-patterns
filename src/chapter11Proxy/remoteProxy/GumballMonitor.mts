import { RemoteGumballMachine } from './gumballMachine/GumballMachine.mjs';

export class GumballMonitor {
  constructor(private machine: RemoteGumballMachine) {}

  public async report(): Promise<void> {
    try {
      console.log(`Gumball Machine: ${await this.machine.getLocation()}`);
      console.log(`Current inventory: ${await this.machine.getCount()} gumballs`);
      console.log(`Current state: ${await this.machine.getState()}`);
    } catch (error) {
      console.error(error);
    }
  }
}
