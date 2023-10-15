import { Amplifier } from './Amplifier.mjs';

export class CdPlayer {
  #title?: string;
  #currentTrack?: number;

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

  public eject(): void {
    console.log(`${this.description} eject`);
    this.#title = undefined;
  }

  public play(track: number): void;
  public play(title: string): void;
  public play(trackOrTitle: number | string): void {
    if (typeof trackOrTitle === 'number') {
      if (!this.#title) {
        console.log(`${this.description} can't play track ${trackOrTitle}, no cd inserted`);
      } else {
        this.#currentTrack = trackOrTitle;
        console.log(`${this.description} playing track ${this.#currentTrack}`);
      }
    } else {
      this.#title = trackOrTitle;
      this.#currentTrack = 0;
      console.log(`${this.description} playing "${trackOrTitle}"`);
    }
  }

  public stop(): void {
    this.#currentTrack = 0;
    console.log(`${this.description} stopped`);
  }

  public pause(): void {
    console.log(`${this.description} paused "${this.#title}"`);
  }
}
