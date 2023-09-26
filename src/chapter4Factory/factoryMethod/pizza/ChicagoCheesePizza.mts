import { Pizza } from './Pizza.mjs';

export class ChicagoCheesePizza extends Pizza {
  public name = 'Chicago Style Deep Dish Cheese Pizza';
  public dough = 'Extra Thick Crust Dough';
  public sauce = 'Plum Tomato Sauce';
  public toppings = ['Shredded Mozzarella Cheese'];

  public cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}
