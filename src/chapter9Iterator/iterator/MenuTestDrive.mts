import { CafeMenu } from './menus/CafeMenu.mjs';
import { DinnerMenu } from './menus/DinnerMenu.mjs';
import { PancakeHouseMenu } from './menus/PancakeHouseMenu.mjs';
import { Waitress } from './Waitress.mjs';

export class MenuTestDrive {
  public static run(): void {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinnerMenu = new DinnerMenu();
    const cafeMenu = new CafeMenu();

    const waitress = new Waitress([pancakeHouseMenu, dinnerMenu, cafeMenu]);

    waitress.printMenu();
  }
}
