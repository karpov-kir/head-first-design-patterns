import { Menu } from './Menu.mjs';
import { MenuItem } from './MenuItem.mjs';

export class DinnerMenu implements Menu {
  private static readonly MAX_ITEMS = 6;
  private readonly menuItems: MenuItem[] = [];

  public [Symbol.iterator](): Iterator<MenuItem, MenuItem | undefined> {
    return this.menuItems[Symbol.iterator]();
  }

  constructor() {
    this.addItem(new MenuItem('Vegetarian BLT', "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99));
    this.addItem(new MenuItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99));
    this.addItem(new MenuItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29));
    this.addItem(new MenuItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05));
    this.addItem(new MenuItem('Steamed Veggies and Brown Rice', 'Steamed vegetables over brown rice', true, 3.99));
    this.addItem(new MenuItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89));
  }

  public addItem(menuItem: MenuItem) {
    if (this.menuItems.length >= DinnerMenu.MAX_ITEMS) {
      console.log("Sorry, menu is full! Can't add item to menu");
    } else {
      this.menuItems.push(menuItem);
    }
  }
}
