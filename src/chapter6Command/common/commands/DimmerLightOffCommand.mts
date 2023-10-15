import { Light } from '../smartHome/Light.mjs';
import { Command } from './Command.mjs';

export class DimmerLightOffCommand implements Command {
  private previousLevel: number;

  constructor(private light: Light) {
    this.previousLevel = light.level;
  }

  public execute(): void {
    this.previousLevel = this.light.level;
    this.light.off();
  }

  public undo(): void {
    this.light.dim(this.previousLevel);
  }
}
