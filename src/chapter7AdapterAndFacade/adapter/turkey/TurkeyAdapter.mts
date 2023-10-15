import { Duck } from '../duck/Duck.mjs';
import { Turkey } from './Turkey.mjs';

export class TurkeyAdapter implements Duck {
  constructor(private turkey: Turkey) {}

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    // Turkeys can only fly short distances,
    // so we need to call it multiple times to make it look like a duck.
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
