import { Beverage, Size } from '../biverages/Beverage.mjs';
import { CondimentDecorator } from './CondimentDecorator.mjs';

const pricePerSize = {
  [Size.Tall]: 0.15,
  [Size.Grande]: 0.2,
  [Size.Venti]: 0.25,
};

export class Mocha extends CondimentDecorator {
  public description: string;

  constructor(protected beverage: Beverage) {
    super(beverage);
    this.description = `${this.beverage.description}, Mocha`;
  }

  public cost() {
    return this.beverage.cost() + pricePerSize[this.beverage.size];
  }
}
