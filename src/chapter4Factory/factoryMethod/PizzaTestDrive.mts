import { ChicagoPizzaStore } from './ChicagoPizzaStore.mjs';
import { NyPizzaStore } from './NyPizzaStore.mjs';

export class PizzaTestDrive {
  public static run() {
    console.log('An amateur pizza chain store is preparing and selling pizzas');

    const nyStore = new NyPizzaStore();
    const chicagoStore = new ChicagoPizzaStore();

    const pizza1 = nyStore.orderPizza('cheese');
    console.log(`Ethan ordered a ${pizza1.name}`);

    const pizza2 = chicagoStore.orderPizza('cheese');
    console.log(`Joel ordered a ${pizza2.name}`);
  }
}
