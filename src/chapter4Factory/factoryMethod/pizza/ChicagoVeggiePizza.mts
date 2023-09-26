import { Pizza } from './Pizza.mjs';

export class ChicagoVeggiePizza extends Pizza {
  public name = 'Chicago Deep Dish Veggie Pizza';
  public dough = 'Extra Thick Crust Dough';
  public sauce = 'Plum Tomato Sauce';
  public toppings = ['Shredded Mozzarella Cheese', 'Black Olives', 'Spinach', 'Eggplant'];

  public cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}
