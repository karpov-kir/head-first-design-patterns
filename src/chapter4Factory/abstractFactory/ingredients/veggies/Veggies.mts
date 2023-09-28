import { Ingredient, IngredientType } from '../Ingredient.mjs';

export abstract class Veggies implements Ingredient {
  public readonly type = IngredientType.Veggies;

  public abstract readonly name: string;
}
