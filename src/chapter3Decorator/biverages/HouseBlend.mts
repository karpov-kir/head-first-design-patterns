import { Beverage } from './Beverage.mjs';

export class HouseBlend extends Beverage {
  public description: string = 'House Blend Coffee';

  cost() {
    return 0.89;
  }
}
