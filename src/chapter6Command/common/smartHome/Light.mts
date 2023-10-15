export class Light {
  #level = 100;

  constructor(private location: string) {}

  public on(): void {
    this.#level = 100;
    console.log(`${this.location} light is on`);
  }

  public off(): void {
    this.#level = 0;
    console.log(`${this.location} light is off`);
  }

  public dim(level: number): void {
    this.#level = level;

    if (level <= 0) {
      this.off();
    } else {
      console.log(`${this.location} is dimmed to ${level}%`);
    }
  }

  public get level(): number {
    return this.#level;
  }
}
