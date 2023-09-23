import { Duck } from './duck/Duck.mjs';
import { MallardDuck } from './duck/MallardDuck.mjs';
import { ModelDuck } from './duck/ModelDuck.mjs';
import { RedheadDuck } from './duck/RedheadDuck.mjs';
import { RubberDuck } from './duck/RubberDuck.mjs';
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
