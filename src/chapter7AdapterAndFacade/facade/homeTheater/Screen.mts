export class Screen {
  constructor(private description: string) {}

  public up(): void {
    console.log(`${this.description} going up`);
  }

  public down(): void {
    console.log(`${this.description} going down`);
  }
}
