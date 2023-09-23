import { FlyWithWings } from '../flyBehavior/FlyWithWings.mjs';
import { Quack } from '../quackBehavior/Quack.mjs';
import { Duck } from './Duck.mjs';

export class RedheadDuck extends Duck {
  public constructor() {
    super(new FlyWithWings(), new Quack());
  }

  public display(): void {
    console.log('Redhead duck is being displayed');
  }
}
