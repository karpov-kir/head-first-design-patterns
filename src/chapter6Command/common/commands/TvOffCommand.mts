import { Tv } from '../smartHome/Tv.mjs';
import { Command } from './Command.mjs';

export class TvOffCommand implements Command {
  private previousChannel: number;

  constructor(private tv: Tv) {
    this.previousChannel = tv.channel;
  }

  public execute(): void {
    this.previousChannel = this.tv.channel;
    this.tv.off();
  }

  public undo(): void {
    this.tv.on();
    this.tv.channel = this.previousChannel;
  }
}
