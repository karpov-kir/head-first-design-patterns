import { Ingredient, IngredientType } from '../Ingredient.mjs';

export abstract class Dough implements Ingredient {
  public readonly type = IngredientType.Dough;

  public abstract readonly name: string;
}
