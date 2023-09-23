import { FlyBehavior } from './FlyBehavior.mjs';

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('Duck is flying using wings!');
  }
}
