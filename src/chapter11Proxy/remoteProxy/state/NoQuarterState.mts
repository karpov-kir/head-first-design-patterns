import { LocalGumballMachine } from '../gumballMachine/LocalGumballMachine.mjs';
import { State } from './State.mjs';

export class NoQuarterState implements State {
  constructor(private gumballMachine: LocalGumballMachine) {}

  public insertQuarter(): void {
    console.log('You inserted a quarter');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  public ejectQuarter(): void {
    console.log('You have not inserted a quarter');
  }

  public turnCrank(): void {
    console.log('You turned, but there is no quarter');
  }

  public dispense(): void {
    console.log('You need to pay first');
  }

  public refill(): void {}

  public toString(): string {
    return 'Waiting for quarter';
  }

  public toJson() {
    return 'Waiting for quarter';
  }
}
