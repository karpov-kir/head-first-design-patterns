import { Pizza } from './Pizza.mjs';

export class VeggiePizza extends Pizza {
  public name = 'Veggie pizza';
  public dough = 'Extra Thick Crust Dough';
  public sauce = 'Plum Tomato Sauce';
  public toppings = ['Shredded Mozzarella Cheese', 'Black Olives', 'Spinach', 'Eggplant'];
}
