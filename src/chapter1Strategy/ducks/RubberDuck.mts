import { FlyNoWay } from '../flyBehavior/FlyNoWay.mjs';
import { Squeak } from '../quackBehavior/Squeak.mjs';
import { Duck } from './Duck.mjs';

export class RubberDuck extends Duck {
  public constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  public display(): void {
    console.log('Rubber duck is being displayed');
  }
}
