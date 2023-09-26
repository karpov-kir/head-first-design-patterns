import { Cheese } from '../ingredients/cheese/Cheese.mjs';
import { Clams } from '../ingredients/clams/Clams.mjs';
import { Dough } from '../ingredients/dough/Dough.mjs';
import { Pepperoni } from '../ingredients/pepperoni/Pepperoni.mjs';
import { Sauce } from '../ingredients/sauce/Sauce.mjs';
import { Veggies } from '../ingredients/veggies/Veggies.mjs';

export abstract class Pizza {
  public abstract name: string;
  public dough!: Dough;
  public sauce!: Sauce;
  public clams?: Clams;
  public cheese?: Cheese;
  public pepperoni?: Pepperoni;
  public veggies?: Veggies[];

  public abstract prepare(): void;

  public bake() {
    console.log('Base for 25 minutes at 350');
  }

  public cut() {
    console.log('Cutting the pizza into diagonal slices');
  }

  public box() {
    console.log('Place pizza in official PizzaStore box');
  }
}
