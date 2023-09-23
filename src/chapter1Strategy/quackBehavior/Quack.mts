import { QuackBehavior } from './QuackBehavior.mjs';

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Duck is quacking!');
  }
}
