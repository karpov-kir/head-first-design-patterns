import { CeilingFanUndo } from './CeilingFanCommand.mjs';
import { Command } from './Command.mjs';

export class CeilingFanHighCommand extends CeilingFanUndo implements Command {
  public execute(): void {
    this.previousSpeed = this.ceilingFan.speed;
    this.ceilingFan.high();
  }
}
