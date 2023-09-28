import { Ingredient, IngredientType } from '../Ingredient.mjs';

export abstract class Pepperoni implements Ingredient {
  public readonly type = IngredientType.Pepperoni;

  public abstract readonly name: string;
}
