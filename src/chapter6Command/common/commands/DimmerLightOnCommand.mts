import { Light } from '../smartHome/Light.mjs';
import { Command } from './Command.mjs';

export class DimmerLightOnCommand implements Command {
  private previousLevel: number;

  constructor(private light: Light) {
    this.previousLevel = light.level;
  }

  public execute(): void {
    this.previousLevel = this.light.level;
    this.light.dim(75);
  }

  public undo(): void {
    this.light.dim(this.previousLevel);
  }
}
