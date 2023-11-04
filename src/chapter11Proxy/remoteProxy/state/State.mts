export interface Jsonable<T = object> {
  toJson(): T;
}

export interface State extends Jsonable<string> {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
  refill(): void;
}

export const isJsonable = (data: any): data is Jsonable =>
  Boolean(data) && typeof data === 'object' && typeof data.toJson === 'function';
