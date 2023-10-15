import { Light } from '../smartHome/Light.mjs';
import { Command } from './Command.mjs';

export class LightOnCommand implements Command {
  private previousLevel: number;

  constructor(private light: Light) {
    this.previousLevel = light.level;
  }

  public execute(): void {
    this.previousLevel = this.light.level;
    this.light.on();
  }

  public undo(): void {
    this.light.dim(this.previousLevel);
  }
}
