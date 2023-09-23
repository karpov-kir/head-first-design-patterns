import { FlyBehavior } from './FlyBehavior.mjs';

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log('Duck cannot fly!');
  }
}
