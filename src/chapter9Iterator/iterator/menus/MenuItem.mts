export class MenuItem {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly isVegetarian: boolean,
    public readonly price: number,
  ) {}
}
