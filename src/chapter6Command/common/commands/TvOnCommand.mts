import { Tv } from '../smartHome/Tv.mjs';
import { Command } from './Command.mjs';

export class TvOnCommand implements Command {
  constructor(private tv: Tv) {}

  public execute(): void {
    this.tv.on();
    this.tv.channel = 3;
  }

  public undo(): void {
    this.tv.off();
  }
}
