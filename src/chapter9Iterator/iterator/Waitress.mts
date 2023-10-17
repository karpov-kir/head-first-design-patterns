import { Menu } from './menus/Menu.mjs';
import { MenuItem } from './menus/MenuItem.mjs';

export class Waitress {
  constructor(private menus: Iterable<Menu>) {}

  public printMenu(): void {
    // `menus` is an array that implements the Iterable interface
    for (const menu of this.menus) {
      this.printMenuItems(menu);
    }
  }

  private printMenuItems(menu: Iterable<MenuItem>): void {
    for (const menuItem of menu) {
      console.log(`${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`);
    }
  }
}
