export class ChocolateBoiler {
  #isEmpty: boolean = true;
  #isBoiled: boolean = false;

  private static uniqueInstance: ChocolateBoiler;

  private constructor() {}

  public static getInstance(): ChocolateBoiler {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new ChocolateBoiler();
    }
    return this.uniqueInstance;
  }

  public get isEmpty(): boolean {
    return this.#isEmpty;
  }

  public get isBoiled(): boolean {
    return this.#isBoiled;
  }

  public fill(): void {
    if (this.#isEmpty) {
      console.log('Filling the boiler with a milk/chocolate mixture');
      this.#isEmpty = false;
      this.#isBoiled = false;
    } else {
      console.log('Cannot fill the boiler, because is is already full');
    }
  }

  public boil(): void {
    if (this.#isEmpty) {
      console.log('Cannot boil the boiler, because it is empty');
    } else if (this.#isBoiled) {
      console.log('Cannot boil the boiler, because the contents are already boiled');
    } else {
      console.log('Bringing the contents to a boil');
      this.#isBoiled = true;
    }
  }

  public drain(): void {
    if (this.#isEmpty) {
      console.log('Cannot drain the boiler, because it is empty');
    } else if (!this.#isBoiled) {
      console.log('Cannot drain the boiler, because the contents are not yet boiled');
    } else {
      console.log('Draining the boiled milk and chocolate');
      this.#isEmpty = true;
    }
  }
}
