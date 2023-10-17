import { CompositeMenuIterator } from './CompositeMenuIterator.mjs';
import { MenuComponent } from './MenuComponent.mjs';

export class Menu extends MenuComponent {
  #name: string;
  #description: string;

  private menuComponents: MenuComponent[] = [];

  public [Symbol.iterator](): Iterator<MenuComponent, MenuComponent | undefined> {
    return new CompositeMenuIterator(this.menuComponents);
  }

  public get name(): string {
    return this.#name;
  }

  public get description(): string {
    return this.#description;
  }

  constructor(name: string, description: string) {
    super();
    this.#name = name;
    this.#description = description;
  }

  public add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent): void {
    this.menuComponents = this.menuComponents.filter((component) => component !== menuComponent);
  }

  public getChild(index: number): MenuComponent {
    return this.menuComponents[index];
  }

  public print(): void {
    console.log(`${this.name}, ${this.description}`);
    console.log('---------------------');

    for (const menuComponent of this.menuComponents) {
      menuComponent.print();
    }
  }
}
