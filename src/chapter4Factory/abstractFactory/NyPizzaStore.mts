import { NyPizzaIngredientFactory } from './NyPizzaIngredientFactory.mjs';
import { CheesePizza } from './pizza/CheesePizza.mjs';
import { ClamPizza } from './pizza/ClamPizza.mjs';
import { PepperoniPizza } from './pizza/PepperoniPizza.mjs';
import { Pizza } from './pizza/Pizza.mjs';
import { VeggiePizza } from './pizza/VeggiePizza.mjs';
import { PizzaStore } from './PizzaStore.mjs';

export class NyPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    const ingredientFactory = new NyPizzaIngredientFactory();

    if (type === 'cheese') {
      return new CheesePizza('New York Style Cheese Pizza', ingredientFactory);
    }

    if (type === 'veggie') {
      return new VeggiePizza('New York Style Veggie Pizza', ingredientFactory);
    }

    if (type === 'clam') {
      return new ClamPizza('New York Style Clam Pizza', ingredientFactory);
    }

    if (type === 'pepperoni') {
      return new PepperoniPizza('New York Style Pepperoni Pizza', ingredientFactory);
    }

    throw new Error(`Unknown pizza type ${type}`);
  }
}
