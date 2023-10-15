import { Command } from '../common/commands/Command.mjs';

export class MacroCommand implements Command {
  constructor(private commands: Command[]) {}

  public execute(): void {
    this.commands.forEach((command) => command.execute());
  }

  public undo(): void {
    // These commands have to be done backwards to ensure
    // proper undo functionality.
    for (let i = this.commands.length - 1; i >= 0; i--) {
      this.commands[i].undo();
    }
  }
}
