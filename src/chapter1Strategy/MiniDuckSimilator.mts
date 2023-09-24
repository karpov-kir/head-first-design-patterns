import { Duck } from './ducks/Duck.mjs';
import { MallardDuck } from './ducks/MallardDuck.mjs';
import { ModelDuck } from './ducks/ModelDuck.mjs';
import { RedheadDuck } from './ducks/RedheadDuck.mjs';
import { RubberDuck } from './ducks/RubberDuck.mjs';
import { FlyRocketPowered } from './flyBehavior/FlyRocketPowered.mjs';

export class MiniDuckSimulator {
  public static run(): void {
    console.log('Simulator is running');

    const modelDuck = new ModelDuck();
    const ducks: Duck[] = [new MallardDuck(), new RedheadDuck(), new RubberDuck(), modelDuck];

    ducks.forEach((duck) => {
      duck.display();
      duck.swim();
      duck.performFly();
      duck.performQuack();
    });

    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();
  }
}
