export class GarageDoor {
  constructor(private location: string) {}

  public up(): void {
    console.log(`${this.location} garage door is up`);
  }

  public down(): void {
    console.log(`${this.location} garage door is down`);
  }

  public stop(): void {
    console.log(`${this.location} garage door is stopped`);
  }

  public lightOn(): void {
    console.log(`${this.location} garage light is on`);
  }

  public lightOff(): void {
    console.log(`${this.location} garage light is off`);
  }
}
