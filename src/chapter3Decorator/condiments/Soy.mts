import { Beverage, Size } from '../biverages/Beverage.mjs';
import { CondimentDecorator } from './CondimentDecorator.mjs';

const pricePerSize = {
  [Size.Tall]: 0.1,
  [Size.Grande]: 0.15,
  [Size.Venti]: 0.2,
};

export class Soy extends CondimentDecorator {
  public description: string;

  constructor(protected beverage: Beverage) {
    super(beverage);
    this.description = `${this.beverage.description}, Soy`;
  }

  public cost() {
    return this.beverage.cost() + pricePerSize[this.beverage.size];
  }
}
