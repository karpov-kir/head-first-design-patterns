export enum StereoInput {
  Cd = 'Cd',
  Dvd = 'Dvd',
  Radio = 'Radio',
}

export class Stereo {
  #input: StereoInput = StereoInput.Cd;

  constructor(private location: string) {}

  public on(): void {
    console.log(`${this.location} stereo is on`);
  }

  public off(): void {
    console.log(`${this.location} stereo is off`);
  }

  public set input(input: StereoInput) {
    this.#input = input;
    console.log(`${this.location} stereo is set for ${input.toUpperCase()} input`);
  }

  public get input(): StereoInput {
    return this.#input;
  }

  public setVolume(volume: number): void {
    // Any validation logic can be added here
    console.log(`${this.location} stereo volume set to ${volume}`);
  }
}
