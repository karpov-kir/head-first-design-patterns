import { StreamingPlayer } from './StreamingPlayer.mjs';
import { Tuner } from './Tuner.mjs';

export class Amplifier {
  #tuner?: Tuner;
  #streamingPlayer?: StreamingPlayer;

  constructor(private description: string) {}

  public on(): void {
    console.log(`${this.description} on`);
  }

  public off(): void {
    console.log(`${this.description} off`);
  }

  public setStereoSound(): void {
    console.log(`${this.description} stereo mode on`);
  }

  public setSurroundSound(): void {
    console.log(`${this.description} surround sound on (5 speakers, 1 subwoofer)`);
  }

  public set volume(level: number) {
    console.log(`${this.description} setting volume to ${level}`);
  }

  public set tuner(tuner: Tuner) {
    console.log(`${this.description} setting tuner to ${tuner}`);
    this.#tuner = tuner;
  }

  public set streamingPlayer(streamingPlayer: StreamingPlayer) {
    console.log(`${this.description} setting streaming player to ${streamingPlayer.toString()}`);
    this.#streamingPlayer = streamingPlayer;
  }
}
