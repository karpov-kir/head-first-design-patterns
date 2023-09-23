import { QuackBehavior } from './QuackBehavior.mjs';

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Duck is squeaking!');
  }
}
