import { Menu } from './Menu.mjs';
import { MenuItem } from './MenuItem.mjs';
import { Waitress } from './Waitress.mjs';

export class MenuTestDrive {
  public static run(): void {
    const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast');
    const dinnerMenu = new Menu('DINNER MENU', 'Lunch');
    const cafeMenu = new Menu('CAFE MENU', 'Dinner');
    const dessertMenu = new Menu('DESSERT MENU', 'Dessert of course!');

    const menus = new Menu('ALL MENUS', 'All menus combined');

    menus.add(pancakeHouseMenu);
    menus.add(dinnerMenu);
    menus.add(cafeMenu);

    pancakeHouseMenu.add(
      new MenuItem("K&B's Pancake Breakfast", 'Pancakes with scrambled eggs, and toast', true, 2.99),
    );
    pancakeHouseMenu.add(new MenuItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99));
    pancakeHouseMenu.add(new MenuItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49));
    pancakeHouseMenu.add(
      new MenuItem('Waffles', 'Waffles, with your choice of blueberries or strawberries', true, 3.59),
    );

    dinnerMenu.add(new MenuItem('Vegetarian BLT', "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99));
    dinnerMenu.add(new MenuItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99));
    dinnerMenu.add(new MenuItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29));
    dinnerMenu.add(
      new MenuItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05),
    );
    dinnerMenu.add(new MenuItem('Steamed Veggies and Brown Rice', 'Steamed vegetables over brown rice', true, 3.99));
    dinnerMenu.add(new MenuItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89));

    dinnerMenu.add(dessertMenu);

    dessertMenu.add(
      new MenuItem('Apple Pie', 'Apple pie with a flakey crust, topped with vanilla icecream', true, 1.59),
    );
    dessertMenu.add(
      new MenuItem('Cheesecake', 'Creamy New York cheesecake, with a chocolate graham crust', true, 1.99),
    );
    dessertMenu.add(new MenuItem('Sorbet', 'A scoop of raspberry and a scoop of lime', true, 1.89));

    cafeMenu.add(
      new MenuItem(
        'Veggie Burger and Air Fries',
        'Veggie burger on a whole wheat bun, lettuce, tomato, and fries',
        true,
        3.99,
      ),
    );
    cafeMenu.add(new MenuItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69));
    cafeMenu.add(new MenuItem('Burrito', 'A large burrito, with whole pinto beans, salsa, guacamole', true, 4.29));

    const waitress = new Waitress(menus);

    waitress.printMenu();
    console.log('--');
    console.log('Only vegetarian menu of all menus combined');
    console.log('--');
    waitress.printVegetarianMenu();
  }
}
