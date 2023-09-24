import { Beverage } from './Beverage.mjs';

export class Espresso extends Beverage {
  public description: string = 'Espresso';

  cost() {
    return 1.99;
  }
}
