export enum Size {
  Tall = 'tall',
  Grande = 'grande',
  Venti = 'venti',
}

export abstract class Beverage {
  public abstract description: string;

  public size = Size.Tall;

  public abstract cost(): number;
}
