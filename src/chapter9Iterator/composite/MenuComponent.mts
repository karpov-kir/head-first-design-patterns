import { UnsupportedOperationError } from './errors.mjs';
import { NullMenuIterator } from './NullMenuIterator.mjs';

export abstract class MenuComponent implements Iterable<MenuComponent> {
  public [Symbol.iterator](): Iterator<MenuComponent, MenuComponent | undefined> {
    return new NullMenuIterator();
  }

  public add(menuComponent: MenuComponent): void {
    throw new UnsupportedOperationError();
  }

  public remove(menuComponent: MenuComponent): void {
    throw new UnsupportedOperationError();
  }

  public getChild(index: number): MenuComponent {
    throw new UnsupportedOperationError();
  }

  public get name(): string {
    throw new UnsupportedOperationError();
  }

  public get description(): string {
    throw new UnsupportedOperationError();
  }

  public get price(): number {
    throw new UnsupportedOperationError();
  }

  public get isVegetarian(): boolean {
    throw new UnsupportedOperationError();
  }

  public print(): void {
    throw new UnsupportedOperationError();
  }
}
