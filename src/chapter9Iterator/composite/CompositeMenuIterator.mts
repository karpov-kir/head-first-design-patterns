import { MenuComponent } from './MenuComponent.mjs';

/**
 * Iterates over all the menu components in the whole tree.
 */
export class CompositeMenuIterator implements Iterator<MenuComponent> {
  private stack: Iterator<MenuComponent, MenuComponent | undefined>[] = [];

  constructor(private menuComponents: Iterable<MenuComponent>) {
    this.stack.push(menuComponents[Symbol.iterator]());
  }

  next(): IteratorResult<MenuComponent, MenuComponent | undefined> {
    if (!this.stack.length) {
      return {
        done: true,
        value: undefined,
      };
    }

    const currentIterator = this.stack[0];
    const { value: currentMenuComponent } = currentIterator.next();

    if (currentMenuComponent) {
      const oneMoreIterator = currentMenuComponent[Symbol.iterator]();

      this.stack.push(oneMoreIterator);

      return {
        done: false,
        value: currentMenuComponent,
      };
    }

    this.stack.shift();

    return this.next();
  }
}
