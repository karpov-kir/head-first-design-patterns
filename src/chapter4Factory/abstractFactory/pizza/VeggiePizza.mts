import { PizzaIngredientFactory } from '../ingredients/PizzaIngredientFactory.mjs';
import { Pizza } from './Pizza.mjs';

export class VeggiePizza extends Pizza {
  constructor(
    public name: string,
    private ingredientFactory: PizzaIngredientFactory,
  ) {
    super();
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);

    console.log(`Tossing dough: ${this.dough.name}`);
    this.dough = this.ingredientFactory.createDough();

    console.log(`Adding sauce: ${this.sauce.name}`);
    this.sauce = this.ingredientFactory.createSauce();

    this.cheese = this.ingredientFactory.createCheese();
    console.log(`Adding cheese: ${this.cheese.name}`);

    this.veggies = this.ingredientFactory.createVeggies();
    console.log(`Adding veggies: ${this.veggies.join(', ')}`);
  }
}
