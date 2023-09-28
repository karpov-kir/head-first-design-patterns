import { Ingredient, IngredientType } from '../Ingredient.mjs';

export abstract class Clams implements Ingredient {
  public readonly type = IngredientType.Clams;

  public abstract readonly name: string;
}
