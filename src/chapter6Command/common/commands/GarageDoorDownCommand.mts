import { GarageDoor } from '../smartHome/GarrageDoor.mjs';
import { Command } from './Command.mjs';

export class GarageDoorDownCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  public execute(): void {
    this.garageDoor.down();
  }

  public undo(): void {
    this.garageDoor.up();
  }
}
