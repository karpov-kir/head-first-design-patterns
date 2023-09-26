import { ChicagoCheesePizza } from './pizza/ChicagoCheesePizza.mjs';
import { ChicagoClamPizza } from './pizza/ChicagoClamPizza.mjs';
import { ChicagoPepperoniPizza } from './pizza/ChicagoPepperoniPizza.mjs';
import { ChicagoVeggiePizza } from './pizza/ChicagoVeggiePizza.mjs';
import { PizzaStore } from './PizzaStore.mjs';

export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: string) {
    if (type === 'cheese') {
      return new ChicagoCheesePizza();
    }

    if (type === 'pepperoni') {
      return new ChicagoPepperoniPizza();
    }

    if (type === 'clam') {
      return new ChicagoClamPizza();
    }

    if (type === 'veggie') {
      return new ChicagoVeggiePizza();
    }

    throw new Error(`Unknown pizza type ${type}`);
  }
}
