export class Tv {
  #channel: number = 1;

  constructor(private location: string) {}

  public on(): void {
    console.log(`${this.location} TV is on`);
  }

  public off(): void {
    console.log(`${this.location} TV is off`);
  }

  public set channel(channel: number) {
    // Any validation logic can be added here
    this.#channel = channel;
    console.log(`${this.location} TV channel is set to ${this.#channel}`);
  }

  public get channel(): number {
    return this.#channel;
  }
}
