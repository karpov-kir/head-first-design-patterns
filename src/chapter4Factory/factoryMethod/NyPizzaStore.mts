import { NyClamPizza } from './pizza/NyClamPizza.mjs';
import { NyCheesePizza } from './pizza/NyheesePizza.mjs';
import { NyPepperoniPizza } from './pizza/NyPepperoniPizza.mjs';
import { NyVeggiePizza } from './pizza/NyVeggiePizza.mjs';
import { PizzaStore } from './PizzaStore.mjs';

export class NyPizzaStore extends PizzaStore {
  public createPizza(type: string) {
    if (type === 'cheese') {
      return new NyCheesePizza();
    }

    if (type === 'pepperoni') {
      return new NyPepperoniPizza();
    }

    if (type === 'clam') {
      return new NyClamPizza();
    }

    if (type === 'veggie') {
      return new NyVeggiePizza();
    }

    throw new Error(`Unknown pizza type ${type}`);
  }
}
