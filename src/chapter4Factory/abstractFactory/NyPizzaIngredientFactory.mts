import { ReggianoCheese } from './ingredients/cheese/ReggianoCheese.mjs';
import { FreshClams } from './ingredients/clams/FreshClams.mjs';
import { ThinCrustDough } from './ingredients/dough/ThinCrustDough.mjs';
import { SlicePepperoni } from './ingredients/pepperoni/SlicedPepperoni.mjs';
import { PizzaIngredientFactory } from './ingredients/PizzaIngredientFactory.mjs';
import { MarinaraSauce } from './ingredients/sauce/MarinaraSauce.mjs';
import { Garlic } from './ingredients/veggies/Garlic.mjs';
import { Mushroom } from './ingredients/veggies/Mushroom.mjs';
import { Onion } from './ingredients/veggies/Onion.mjs';
import { RedPepper } from './ingredients/veggies/RedPepper.mjs';

export class NyPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough() {
    return new ThinCrustDough();
  }

  public createSauce() {
    return new MarinaraSauce();
  }

  public createCheese() {
    return new ReggianoCheese();
  }

  public createVeggies() {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  public createPepperoni() {
    return new SlicePepperoni();
  }

  public createClams() {
    return new FreshClams();
  }
}
