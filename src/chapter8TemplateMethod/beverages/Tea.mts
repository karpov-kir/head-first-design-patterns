import { CaffeineBeverage } from './CaffeineBeverage.mjs';

export class Tea extends CaffeineBeverage {
  public brew(): void {
    console.log('Steeping the tea');
  }

  public addCondiments(): void {
    console.log('Adding lemon');
  }

  public doesCustomerWantCondiments(): boolean {
    return Math.random() >= 0.5;
  }
}
