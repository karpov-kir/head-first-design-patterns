export enum IngredientType {
  Dough = 'Dough',
  Sauce = 'Sauce',
  Cheese = 'Cheese',
  Veggies = 'Veggies',
  Pepperoni = 'Pepperoni',
  Clams = 'Clams',
}

export interface Ingredient {
  type: IngredientType;
  name: string;
}
