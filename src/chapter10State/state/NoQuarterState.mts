import { GumballMachine } from '../GumballMachine.mjs';
import { State } from './State.mjs';

export class NoQuarterState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log('You inserted a quarter');
    this.gumballMachine.state = this.gumballMachine.hasQuarterState;
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
}
