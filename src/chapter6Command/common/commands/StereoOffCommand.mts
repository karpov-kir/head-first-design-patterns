import { Stereo } from '../smartHome/Stereo.mjs';
import { Command } from './Command.mjs';

export class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {}

  public execute(): void {
    this.stereo.off();
  }

  public undo(): void {
    this.stereo.on();
  }
}
