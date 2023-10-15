import { HotTub } from '../smartHome/HotTub.mjs';
import { Command } from './Command.mjs';

export class HotTubOffCommand implements Command {
  constructor(private hotTub: HotTub) {}

  public execute(): void {
    this.hotTub.cool();
    this.hotTub.off();
  }

  public undo(): void {
    this.hotTub.on();
    this.hotTub.heat();
  }
}
