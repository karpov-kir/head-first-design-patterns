import { Duck } from './Duck.mjs';

export class MallardDuck implements Duck {
  public quack(): void {
    console.log('Quack');
  }

  public fly(): void {
    console.log("I'm flying");
  }
}
