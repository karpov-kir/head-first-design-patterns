export abstract class Pizza {
  public abstract name: string;
  public abstract dough: string;
  public abstract sauce: string;
  public abstract toppings: string[];

  public prepare() {
    console.log(`Preparing ${this.name}`);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log(`Adding toppings: ${this.toppings.join(', ')}`);
  }

  public bake() {
    console.log('Base for 25 minutes at 350');
  }

  public cut() {
    console.log('Cutting the pizza into diagonal slices');
  }

  public box() {
    console.log('Place pizza in official PizzaStore box');
  }
}
