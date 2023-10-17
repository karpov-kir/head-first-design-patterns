import { MenuComponent } from './MenuComponent.mjs';

export class MenuItem extends MenuComponent {
  #name: string;
  #description: string;
  #isVegetarian: boolean;
  #price: number;

  public get name(): string {
    return this.#name;
  }

  public get description(): string {
    return this.#description;
  }

  public get isVegetarian(): boolean {
    return this.#isVegetarian;
  }

  public get price(): number {
    return this.#price;
  }

  constructor(name: string, description: string, isVegetarian: boolean, price: number) {
    super();
    this.#name = name;
    this.#description = description;
    this.#isVegetarian = isVegetarian;
    this.#price = price;
  }

  public print(): void {
    const nameParts = [this.name];

    if (this.isVegetarian) {
      nameParts.push('(v)');
    }

    console.log(`${nameParts.join('')}, ${this.price} -- ${this.description}`);
  }
}
