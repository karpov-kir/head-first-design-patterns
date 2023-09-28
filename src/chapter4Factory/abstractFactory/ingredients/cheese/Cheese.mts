import { Ingredient, IngredientType } from '../Ingredient.mjs';

export abstract class Cheese implements Ingredient {
  public readonly type = IngredientType.Cheese;

  public abstract readonly name: string;
}
