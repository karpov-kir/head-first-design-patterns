import { CheesePizza } from './pizza/CheesePizza.mjs';
import { ClamPizza } from './pizza/ClamPizza.mjs';
import { PepperoniPizza } from './pizza/PepperoniPizza.mjs';
import { Pizza } from './pizza/Pizza.mjs';
import { VeggiePizza } from './pizza/VeggiePizza.mjs';

export class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new CheesePizza();
    }

    if (type === 'pepperoni') {
      return new PepperoniPizza();
    }

    if (type === 'clam') {
      return new ClamPizza();
    }

    if (type === 'veggie') {
      return new VeggiePizza();
    }

    throw new Error(`Unknown pizza type ${type}`);
  }
}
