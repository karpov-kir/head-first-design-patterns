import { LocalGumballMachine } from '../gumballMachine/LocalGumballMachine.mjs';
import { State } from './State.mjs';

export class WinnerState implements State {
  constructor(private gumballMachine: LocalGumballMachine) {}

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

    if (this.gumballMachine.getCount() == 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      return;
    }

    this.gumballMachine.releaseBall();
    console.log("YOU'RE A WINNER! You got two gumballs for your quarter");

    if (this.gumballMachine.getCount() == 0) {
      console.log('Oops, out of gumballs!');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      return;
    }

    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  public refill(): void {}

  public toString(): string {
    return 'Dispending two gumballs for your quarter, because YOU ARE A WINNER!';
  }

  public toJson() {
    return 'Dispending two gumballs for your quarter, because YOU ARE A WINNER!';
  }
}
