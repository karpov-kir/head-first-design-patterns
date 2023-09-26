import { SimplePizzaFactory } from './SimplePizzaFactory.mjs';
import { SimplePizzaStore } from './SimplePizzaStore.mjs';

export class PizzaTestDrive {
  public static run() {
    console.log('A local pizza store is preparing and selling pizzas');

    const store = new SimplePizzaStore(new SimplePizzaFactory());

    const pizza1 = store.orderPizza('cheese');
    console.log(`Max ordered a ${pizza1.name}`);

    const pizza2 = store.orderPizza('pepperoni');
    console.log(`Jenny ordered a ${pizza2.name}`);
  }
}
