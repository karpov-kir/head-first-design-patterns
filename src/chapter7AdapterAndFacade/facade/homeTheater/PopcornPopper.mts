export class PopcornPopper {
  constructor(private description: string) {}

  public on(): void {
    console.log(`${this.description} on`);
  }

  public off(): void {
    console.log(`${this.description} off`);
  }

  public pop(): void {
    console.log(`${this.description} popping popcorn!`);
  }
}
