import { PizzaIngredientFactory } from '../ingredients/PizzaIngredientFactory.mjs';
import { Pizza } from './Pizza.mjs';

export class CheesePizza extends Pizza {
  constructor(
    public name: string,
    private ingredientFactory: PizzaIngredientFactory,
  ) {
    super();
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);

    this.dough = this.ingredientFactory.createDough();
    console.log(`Tossing dough: ${this.dough.name}`);

    this.sauce = this.ingredientFactory.createSauce();
    console.log(`Adding sauce: ${this.sauce.name}`);

    this.cheese = this.ingredientFactory.createCheese();
    console.log(`Adding cheese: ${this.cheese.name}`);
  }
}
