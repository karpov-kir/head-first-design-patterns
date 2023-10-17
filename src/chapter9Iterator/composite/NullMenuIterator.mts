import { MenuComponent } from './MenuComponent.mjs';

export class NullMenuIterator implements Iterator<MenuComponent> {
  public next(): IteratorResult<MenuComponent, MenuComponent | undefined> {
    return { done: true, value: undefined };
  }
}
