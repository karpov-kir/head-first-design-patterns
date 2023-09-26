import { Pizza } from './pizza/Pizza.mjs';
import { SimplePizzaFactory } from './SimplePizzaFactory.mjs';

export class SimplePizzaStore {
  constructor(private factory: SimplePizzaFactory) {}

  public orderPizza(type: string): Pizza {
    const pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
