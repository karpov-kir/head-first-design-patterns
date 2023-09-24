import { Beverage, Size } from '../biverages/Beverage.mjs';
import { CondimentDecorator } from './CondimentDecorator.mjs';

const pricePerSize = {
  [Size.Tall]: 0.05,
  [Size.Grande]: 0.1,
  [Size.Venti]: 0.15,
};

export class Whip extends CondimentDecorator {
  public description: string;

  constructor(protected beverage: Beverage) {
    super(beverage);
    this.description = `${this.beverage.description}, Whip`;
  }

  public cost() {
    return this.beverage.cost() + pricePerSize[this.beverage.size];
  }
}
