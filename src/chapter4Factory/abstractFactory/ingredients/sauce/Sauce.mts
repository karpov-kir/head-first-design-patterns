import { Ingredient, IngredientType } from '../Ingredient.mjs';

export abstract class Sauce implements Ingredient {
  public readonly type = IngredientType.Sauce;

  public abstract readonly name: string;
}
