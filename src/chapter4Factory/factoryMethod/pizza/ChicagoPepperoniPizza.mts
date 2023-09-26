import { Pizza } from './Pizza.mjs';

export class ChicagoPepperoniPizza extends Pizza {
  public name = 'Chicago Style Pepperoni Pizza';
  public dough = 'Extra Thick Crust Dough';
  public sauce = 'Plum Tomato Sauce';
  public toppings = ['Shredded Mozzarella Cheese', 'Black Olives', 'Spinach', 'Eggplant', 'Sliced Pepperoni'];

  public cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}
