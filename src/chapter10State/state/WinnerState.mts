import { GumballMachine } from '../GumballMachine.mjs';
import { State } from './State.mjs';

export class WinnerState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }

  public ejectQuarter(): void {
    console.log('Sorry, you already turned the crank');
  }

  public turnCrank(): void {
    console.log('Turning twice does not get you another gumball!');
  }

  public dispense(): void {
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.count == 0) {
      this.gumballMachine.state = this.gumballMachine.soldOutState;
      return;
    }

    this.gumballMachine.releaseBall();
    console.log("YOU'RE A WINNER! You got two gumballs for your quarter");

    if (this.gumballMachine.count == 0) {
      console.log('Oops, out of gumballs!');
      this.gumballMachine.state = this.gumballMachine.soldOutState;
      return;
    }

    this.gumballMachine.state = this.gumballMachine.noQuarterState;
  }

  public refill(): void {}

  public toString(): string {
    return 'Dispending two gumballs for your quarter, because YOU ARE A WINNER!';
  }
}
