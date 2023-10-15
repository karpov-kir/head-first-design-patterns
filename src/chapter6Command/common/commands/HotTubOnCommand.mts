import { HotTub } from '../smartHome/HotTub.mjs';
import { Command } from './Command.mjs';

export class HotTubOnCommand implements Command {
  constructor(private hotTub: HotTub) {}

  public execute(): void {
    this.hotTub.on();
    this.hotTub.heat();
    this.hotTub.bubblesOn();
  }

  public undo(): void {
    this.hotTub.off();
  }
}
