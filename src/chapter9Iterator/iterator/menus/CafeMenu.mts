import { Menu } from './Menu.mjs';
import { MenuItem } from './MenuItem.mjs';

export class CafeMenu implements Menu {
  private menuItems: Record<string, MenuItem> = {};

  public [Symbol.iterator](): Iterator<MenuItem, MenuItem | undefined> {
    const menuItems = Object.values(this.menuItems);
    let index = 0;

    return {
      next: () => {
        const menuItem = menuItems[index];
        index++;

        if (!menuItem) {
          return { done: true, value: undefined };
        }

        return { done: false, value: menuItem };
      },
    };
  }

  constructor() {
    this.addItem(
      new MenuItem(
        'Veggie Burger and Air Fries',
        'Veggie burger on a whole wheat bun, lettuce, tomato, and fries',
        true,
        3.99,
      ),
    );
    this.addItem(new MenuItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69));
    this.addItem(new MenuItem('Burrito', 'A large burrito, with whole pinto beans, salsa, guacamole', true, 4.29));
  }

  public addItem(menuItem: MenuItem): void {
    this.menuItems[menuItem.name] = menuItem;
  }
}
