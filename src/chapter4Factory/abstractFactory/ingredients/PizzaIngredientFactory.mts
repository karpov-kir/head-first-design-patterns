import { Cheese } from './cheese/Cheese.mjs';
import { Clams } from './clams/Clams.mjs';
import { Dough } from './dough/Dough.mjs';
import { Pepperoni } from './pepperoni/Pepperoni.mjs';
import { Sauce } from './sauce/Sauce.mjs';
import { Veggies } from './veggies/Veggies.mjs';

export interface PizzaIngredientFactory {
  createDough: () => Dough;
  createSauce: () => Sauce;
  createCheese: () => Cheese;
  createVeggies: () => Veggies[];
  createPepperoni: () => Pepperoni;
  createClams: () => Clams;
}
