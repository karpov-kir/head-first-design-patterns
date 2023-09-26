import { Pizza } from './Pizza.mjs';

export class ChicagoClamPizza extends Pizza {
  public name = 'Chicago Style Clam Pizza';
  public dough = 'Extra Thick Crust Dough';
  public sauce = 'Plum Tomato Sauce';
  public toppings = ['Shredded Mozzarella Cheese', 'Frozen Clams from Chesapeake Bay'];

  public cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}
