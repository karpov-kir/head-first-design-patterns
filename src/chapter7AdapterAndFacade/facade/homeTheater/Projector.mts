import { StreamingPlayer } from './StreamingPlayer.mjs';

export class Projector {
  constructor(
    private description: string,
    private streamingPlayer: StreamingPlayer,
  ) {}

  public on(): void {
    console.log(`${this.description} on`);
  }

  public off(): void {
    console.log(`${this.description} off`);
  }

  public wideScreenMode(): void {
    console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
  }

  public tvMode(): void {
    console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
  }
}
