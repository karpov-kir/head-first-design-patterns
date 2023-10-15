import { DroneAdapter } from './drone/DroneAdapter.mjs';
import { SuperDrone } from './drone/SuperDrone.mjs';
import { MallardDuck } from './duck/MallardDuck.mjs';
import { TurkeyAdapter } from './turkey/TurkeyAdapter.mjs';
import { WildTurkey } from './turkey/WildTurkey.mjs';

export class DuckTestDrive {
  public static run(): void {
    const duck = new MallardDuck();
    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);
    const drone = new SuperDrone();
    const droneAdapter = new DroneAdapter(drone);

    console.log('The duck is doing something...');
    duck.quack();
    duck.fly();

    console.log('The turkey is doing something...');
    turkey.gobble();
    turkey.fly();

    console.log('The turkey is pretending being a duck and doing something...');
    turkeyAdapter.quack();
    turkeyAdapter.fly();

    console.log('The drone is doing something...');
    drone.beep();
    drone.spinRotors();
    drone.takeOff();

    console.log('The drone is pretending being a duck and doing something...');
    droneAdapter.quack();
    droneAdapter.fly();
  }
}
