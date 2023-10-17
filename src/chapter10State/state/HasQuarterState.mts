import { GumballMachine } from '../GumballMachine.mjs';
import { State } from './State.mjs';

export class HasQuarterState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log('You cannot insert another quarter');
  }

  public ejectQuarter(): void {
    console.log('Quarter returned');
    this.gumballMachine.state = this.gumballMachine.noQuarterState;
  }

  public turnCrank(): void {
    console.log('You turned...');

    const isWinner = Math.random() < 0.1;

    if (isWinner && this.gumballMachine.count > 1) {
      this.gumballMachine.state = this.gumballMachine.winnerState;
      return;
    }

    this.gumballMachine.state = this.gumballMachine.soldState;
  }

  public dispense(): void {
    console.log('No gumball dispensed');
  }

  public refill(): void {}

  public toString(): string {
    return 'Waiting for turn of crank';
  }
}
