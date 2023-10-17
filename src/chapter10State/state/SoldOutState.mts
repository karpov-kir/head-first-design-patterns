import { GumballMachine } from '../GumballMachine.mjs';
import { State } from './State.mjs';

export class SoldOutState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log('You cannot insert a quarter, the machine is sold out');
  }

  public ejectQuarter(): void {
    console.log('You cannot eject, you have not inserted a quarter yet');
  }

  public turnCrank(): void {
    console.log('You turned, but there are no gumballs');
  }

  public dispense(): void {
    console.log('No gumball dispensed');
  }

  public refill(): void {
    this.gumballMachine.state = this.gumballMachine.noQuarterState;
  }

  public toString(): string {
    return 'Sold out';
  }
}
