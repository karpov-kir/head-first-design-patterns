import { Menu } from './Menu.mjs';
import { MenuItem } from './MenuItem.mjs';

export class PancakeHouseMenu implements Menu {
  private readonly menuItems = new Map<string, MenuItem>();

  public [Symbol.iterator](): Iterator<MenuItem, MenuItem | undefined> {
    const mapIterator = this.menuItems[Symbol.iterator]();

    return {
      next: (): IteratorResult<MenuItem> => {
        const next = mapIterator.next();

        if (!next.value) {
          return { done: true, value: undefined };
        }

        const { done } = next;
        const [, menuItem] = next.value;

        return { done, value: menuItem };
      },
    };
  }

  constructor() {
    this.addItem(new MenuItem("K&B's Pancake Breakfast", 'Pancakes with scrambled eggs, and toast', true, 2.99));
    this.addItem(new MenuItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99));
    this.addItem(new MenuItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49));
    this.addItem(new MenuItem('Waffles', 'Waffles, with your choice of blueberries or strawberries', true, 3.59));
  }

  public addItem(menuItem: MenuItem) {
    this.menuItems.set(menuItem.name, menuItem);
  }
}
