import { HasQuarterState } from '../state/HasQuarterState.mjs';
import { NoQuarterState } from '../state/NoQuarterState.mjs';
import { SoldOutState } from '../state/SoldOutState.mjs';
import { SoldState } from '../state/SoldState.mjs';
import { State } from '../state/State.mjs';
import { WinnerState } from '../state/WinnerState.mjs';
import { RemoteGumballMachine } from './GumballMachine.mjs';

export class LocalGumballMachine implements RemoteGumballMachine {
  private soldOutState: State = new SoldOutState(this);
  private noQuarterState: State = new NoQuarterState(this);
  private hasQuarterState: State = new HasQuarterState(this);
  private soldState: State = new SoldState(this);
  private winnerState: State = new WinnerState(this);

  #count = 0;
  #state: State = this.soldOutState;

  public getCount(): number {
    return this.#count;
  }

  public getLocation(): string {
    return this.location;
  }

  public getState(): State {
    return this.#state;
  }

  public getSoldOutState(): State {
    return this.soldOutState;
  }

  public getNoQuarterState(): State {
    return this.noQuarterState;
  }

  public getHasQuarterState(): State {
    return this.hasQuarterState;
  }

  public getSoldState(): State {
    return this.soldState;
  }

  public getWinnerState(): State {
    return this.winnerState;
  }

  public setState(state: State): void {
    this.#state = state;
  }

  constructor(
    private location: string,
    countOfGumballs: number,
  ) {
    this.#count = countOfGumballs;

    if (countOfGumballs > 0) {
      this.#state = this.noQuarterState;
    }
  }

  public insertQuarter(): void {
    this.#state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.#state.ejectQuarter();
  }

  public turnCrank(): void {
    this.#state.turnCrank();
    this.#state.dispense();
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

    this.#state.refill();
  }

  public toString(): string {
    let output = 'Mighty Gumball, Inc.\n';

    output += `JavaScript-enabled Standing Gumball Model #2023\n`;
    output += `Inventory: ${this.#count} gumball${this.#count !== 1 ? 's' : ''}\n`;
    output += `Machine is ${this.#state}`;

    return output;
  }
}
