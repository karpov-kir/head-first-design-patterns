import { Beverage } from '../biverages/Beverage.mjs';

export abstract class CondimentDecorator extends Beverage {
  constructor(protected beverage: Beverage) {
    super();
  }
}
