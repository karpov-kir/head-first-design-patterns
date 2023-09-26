import { MozarellaCheese } from './ingredients/cheese/MozzarellaCheese.mjs';
import { FrozenClams } from './ingredients/clams/FrozenClams.mjs';
import { ThinCrustDough } from './ingredients/dough/ThinCrustDough.mjs';
import { SlicePepperoni } from './ingredients/pepperoni/SlicedPepperoni.mjs';
import { PizzaIngredientFactory } from './ingredients/PizzaIngredientFactory.mjs';
import { PlumTomatoSauce } from './ingredients/sauce/PlumTomatoSauce.mjs';
import { BlackOlives } from './ingredients/veggies/BlackOlives.mjs';
import { Eggplant } from './ingredients/veggies/Eggplant.mjs';
import { Spinach } from './ingredients/veggies/Spinach.mjs';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough() {
    return new ThinCrustDough();
  }

  public createSauce() {
    return new PlumTomatoSauce();
  }

  public createCheese() {
    return new MozarellaCheese();
  }

  public createVeggies() {
    return [new BlackOlives(), new Spinach(), new Eggplant()];
  }

  public createPepperoni() {
    return new SlicePepperoni();
  }

  public createClams() {
    return new FrozenClams();
  }
}
