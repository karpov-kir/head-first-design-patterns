export abstract class CaffeineBeverage {
  public prepareBeverage(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.doesCustomerWantCondiments()) {
      this.addCondiments();
    }
  }

  public abstract brew(): void;

  public abstract addCondiments(): void;

  public boilWater(): void {
    console.log('Boiling water');
  }

  public pourInCup(): void {
    console.log('Pouring into cup');
  }

  public doesCustomerWantCondiments(): boolean {
    return true;
  }
}
