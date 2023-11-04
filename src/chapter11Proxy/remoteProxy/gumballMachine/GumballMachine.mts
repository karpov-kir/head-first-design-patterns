import { State } from '../state/State.mjs';

type Promisify<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any
    ? (...args: Parameters<T[P]>) => Promise<ReturnType<T[P]>> | ReturnType<T[P]>
    : T[P];
};

interface BaseGumballMachine {
  getCount(): number;
  getLocation(): string;
  getState(): State;
}

export interface RemoteGumballMachine extends Promisify<BaseGumballMachine> {}
