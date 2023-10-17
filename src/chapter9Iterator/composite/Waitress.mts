import { UnsupportedOperationError } from './errors.mjs';
import { Menu } from './Menu.mjs';

export class Waitress {
  constructor(private menu: Menu) {}

  public printMenu(): void {
    this.menu.print();
  }

  public printVegetarianMenu(): void {
    console.log('VEGETARIAN MENU');
    console.log('---------------');

    for (const menuComponent of this.menu) {
      try {
        if (menuComponent.isVegetarian) {
          menuComponent.print();
        }
      } catch (error) {
        if (error instanceof UnsupportedOperationError) {
          continue;
        }

        throw error;
      }
    }
  }
}
