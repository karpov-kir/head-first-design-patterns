import { FlyBehavior } from './FlyBehavior.mjs';

export class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log('Duck is flying using a rocket!');
  }
}
