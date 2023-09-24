import { Observer } from '../displays/Observer.mjs';

export interface Subject<T> {
  registerObserver(observer: Observer<T>): void;
  removeObserver(observer: Observer<T>): void;
  notifyObservers(): void;
}
