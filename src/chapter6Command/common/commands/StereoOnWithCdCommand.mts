import { Stereo, StereoInput } from '../smartHome/Stereo.mjs';
import { Command } from './Command.mjs';

export class StereoOnWithCdCommand implements Command {
  constructor(private stereo: Stereo) {}

  public execute(): void {
    this.stereo.on();
    this.stereo.input = StereoInput.Cd;
    this.stereo.setVolume(11);
  }

  public undo(): void {
    this.stereo.off();
  }
}
