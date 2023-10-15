import { Command } from './Command.mjs';

export class NoCommand implements Command {
  public execute(): void {}

  public undo(): void {}
}
