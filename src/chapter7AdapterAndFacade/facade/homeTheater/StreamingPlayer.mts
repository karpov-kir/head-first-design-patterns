import { Amplifier } from './Amplifier.mjs';

export class StreamingPlayer {
  #movie?: string;
  #currentChapter?: number;

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

  public play(chapter: number): void;
  public play(movie: string): void;
  public play(chapterOrMovie: number | string): void {
    if (typeof chapterOrMovie === 'number') {
      if (!this.#movie) {
        console.log(`${this.description} can't play chapter ${chapterOrMovie} no movie selected`);
      } else {
        this.#currentChapter = chapterOrMovie;
        console.log(`${this.description} playing chapter ${this.#currentChapter} of "${this.#movie}"`);
      }
    } else {
      this.#movie = chapterOrMovie;
      this.#currentChapter = 0;
      console.log(`${this.description} playing "${chapterOrMovie}"`);
    }
  }

  public stop(): void {
    this.#currentChapter = 0;
    console.log(`${this.description} stopped "${this.#movie}"`);
  }

  public pause(): void {
    console.log(`${this.description} paused "${this.#movie}"`);
  }

  public setTwoChannelAudio(): void {
    console.log(`${this.description} set two channel audio`);
  }

  public setSurroundAudio(): void {
    console.log(`${this.description} set surround audio`);
  }

  public toString(): string {
    return this.description;
  }
}
