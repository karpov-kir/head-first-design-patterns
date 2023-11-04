import { LocalGumballMachine } from '../gumballMachine/LocalGumballMachine.mjs';
import { State } from './State.mjs';

export class HasQuarterState implements State {
  constructor(private gumballMachine: LocalGumballMachine) {}

  public insertQuarter(): void {
    console.log('You cannot insert another quarter');
  }

  public ejectQuarter(): void {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  public turnCrank(): void {
    console.log('You turned...');

    const isWinner = Math.random() < 0.1;

    if (isWinner && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
      return;
    }

    this.gumballMachine.setState(this.gumballMachine.getSoldState());
  }

  public dispense(): void {
    console.log('No gumball dispensed');
  }

  public refill(): void {}

  public toString(): string {
    return 'Waiting for turn of crank';
  }

  public toJson() {
    return 'Waiting for turn of crank';
  }
}
