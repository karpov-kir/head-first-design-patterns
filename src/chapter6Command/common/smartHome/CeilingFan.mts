export enum CeilingFanSpeed {
  Off = 'off',
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}
export class CeilingFan {
  #speed = CeilingFanSpeed.Low;

  public get speed(): CeilingFanSpeed {
    return this.#speed;
  }

  constructor(private location: string) {}

  public high(): void {
    this.#speed = CeilingFanSpeed.High;
    console.log(`${this.location} ceiling fan is on high`);
  }

  public medium(): void {
    this.#speed = CeilingFanSpeed.Medium;
    console.log(`${this.location} ceiling fan is on medium`);
  }

  public low(): void {
    this.#speed = CeilingFanSpeed.Low;
    console.log(`${this.location} ceiling fan is on low`);
  }

  public off(): void {
    this.#speed = CeilingFanSpeed.Off;
    console.log(`${this.location} ceiling fan is off`);
  }
}
