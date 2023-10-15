import { Coffee } from './beverages/Coffee.mjs';
import { Tea } from './beverages/Tea.mjs';

export class BeverageTestDrive {
  public static run(): void {
    const tea = new Tea();
    const coffee = new Coffee();

    console.log('Making tea...');
    tea.prepareBeverage();

    console.log('Making coffee...');
    coffee.prepareBeverage();
  }
}
