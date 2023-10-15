import { Amplifier } from './Amplifier.mjs';

export class Tuner {
  #frequency?: number;

  constructor(
    private description: string,
    private amplifier: Amplifier,
  ) {}

  public on(): void {
    console.log(`${this.description} on`);
  }

  public off(): void {
    console.log(`${this.description} off`);
  }

  public set frequency(frequency: number) {
    console.log(`${this.description} setting frequency to ${frequency}`);
    this.#frequency = frequency;
  }

  public setAm(): void {
    console.log(`${this.description} setting AM mode`);
  }

  public setFm(): void {
    console.log(`${this.description} setting FM mode`);
  }
}
