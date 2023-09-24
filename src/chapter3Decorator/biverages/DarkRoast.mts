import { Beverage } from './Beverage.mjs';

export class DarkRoast extends Beverage {
  public description: string = 'Dark Roast Coffee';

  cost() {
    return 0.99;
  }
}
