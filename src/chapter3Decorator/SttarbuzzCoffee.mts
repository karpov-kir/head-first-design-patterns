import { Size } from './biverages/Beverage.mjs';
import { DarkRoast } from './biverages/DarkRoast.mjs';
import { Espresso } from './biverages/Espresso.mjs';
import { HouseBlend } from './biverages/HouseBlend.mjs';
import { Mocha } from './condiments/Mocha.mjs';
import { Soy } from './condiments/Soy.mjs';
import { Whip } from './condiments/Whip.mjs';

export class StarbuzzCoffee {
  public static run(): void {
    console.log('Starbuzz Coffee is selling some beverages');

    const beverage1 = new Espresso();
    beverage1.size = Size.Grande;
    console.log(`${beverage1.description} $${beverage1.cost()}`);

    const beverage2 = new Whip(new Mocha(new Mocha(new DarkRoast())));
    beverage1.size = Size.Venti;
    console.log(`${beverage2.description} $${beverage2.cost()}`);

    const beverage3 = new Whip(new Mocha(new Soy(new HouseBlend())));
    console.log(`${beverage3.description} $${beverage3.cost()}`);
  }
}
