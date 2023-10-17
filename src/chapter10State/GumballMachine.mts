import { HasQuarterState } from './state/HasQuarterState.mjs';
import { NoQuarterState } from './state/NoQuarterState.mjs';
import { SoldOutState } from './state/SoldOutState.mjs';
import { SoldState } from './state/SoldState.mjs';
import { State } from './state/State.mjs';
import { WinnerState } from './state/WinnerState.mjs';

export class GumballMachine {
  #count = 0;

  public readonly soldOutState: State = new SoldOutState(this);
  public readonly noQuarterState: State = new NoQuarterState(this);
  public readonly hasQuarterState: State = new HasQuarterState(this);
  public readonly soldState: State = new SoldState(this);
  public readonly winnerState: State = new WinnerState(this);

  public state: State = this.soldOutState;

  public get count(): number {
    return this.#count;
  }

  constructor(countOfGumballs: number) {
    this.#count = countOfGumballs;

    if (countOfGumballs > 0) {
      this.state = this.noQuarterState;
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public releaseBall(): void {
    console.log('A gumball comes rolling out the slot...');

    if (this.#count !== 0) {
      this.#count--;
    }
  }

  public refill(countOfGumballs: number): void {
    this.#count += countOfGumballs;

    console.log(`The gumball machine was just refilled; its new count of gumballs is: ${this.#count}`);

    this.state.refill();
  }

  public toString(): string {
    let output = 'Mighty Gumball, Inc.\n';

    output += `JavaScript-enabled Standing Gumball Model #2023\n`;
    output += `Inventory: ${this.#count} gumball${this.#count !== 1 ? 's' : ''}\n`;
    output += `Machine is ${this.state}`;

    return output;
  }
}
