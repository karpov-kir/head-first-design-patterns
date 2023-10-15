import { GarageDoor } from '../smartHome/GarrageDoor.mjs';
import { Command } from './Command.mjs';

export class GarageDoorUpCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  public execute(): void {
    this.garageDoor.up();
  }

  public undo(): void {
    this.garageDoor.down();
  }
}
