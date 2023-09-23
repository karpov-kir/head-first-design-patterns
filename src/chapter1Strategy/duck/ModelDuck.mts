import { FlyNoWay } from '../flyBehavior/FlyNoWay.mjs';
import { MuteQuack } from '../quackBehavior/MuteQuack.mjs';
import { Duck } from './Duck.mjs';

export class ModelDuck extends Duck {
  public constructor() {
    super(new FlyNoWay(), new MuteQuack());
  }

  public display(): void {
    console.log('Model duck is being displayed');
  }
}
