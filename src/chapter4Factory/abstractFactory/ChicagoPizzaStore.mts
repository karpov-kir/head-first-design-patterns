import { ChicagoPizzaIngredientFactory } from './ChicagoPizzaIngredientFactory.mjs';
import { CheesePizza } from './pizza/CheesePizza.mjs';
import { ClamPizza } from './pizza/ClamPizza.mjs';
import { PepperoniPizza } from './pizza/PepperoniPizza.mjs';
import { Pizza } from './pizza/Pizza.mjs';
import { VeggiePizza } from './pizza/VeggiePizza.mjs';
import { PizzaStore } from './PizzaStore.mjs';

export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    if (type === 'cheese') {
      return new CheesePizza('Chicago Style Cheese Pizza', ingredientFactory);
    }

    if (type === 'veggie') {
      return new VeggiePizza('Chicago Style Veggie Pizza', ingredientFactory);
    }

    if (type === 'clam') {
      return new ClamPizza('Chicago Style Clam Pizza', ingredientFactory);
    }

    if (type === 'pepperoni') {
      return new PepperoniPizza('Chicago Style Pepperoni Pizza', ingredientFactory);
    }

    throw new Error(`Unknown pizza type ${type}`);
  }
}
