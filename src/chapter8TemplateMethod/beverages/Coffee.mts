import { CaffeineBeverage } from './CaffeineBeverage.mjs';

export class Coffee extends CaffeineBeverage {
  public brew(): void {
    console.log('Dripping coffee through filter');
  }

  public addCondiments(): void {
    console.log('Adding sugar and Milk');
  }

  public doesCustomerWantCondiments(): boolean {
    return Math.random() >= 0.5;
  }
}
