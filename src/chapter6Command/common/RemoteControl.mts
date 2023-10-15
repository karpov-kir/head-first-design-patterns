import { Command } from './commands/Command.mjs';
import { NoCommand } from './commands/NoCommand.mjs';

export class RemoteControl {
  private onCommands: Command[];
  private offCommands: Command[];
  private undoCommand: Command;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }

    this.undoCommand = noCommand;
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    // Any validation logic can be added here
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    // Any validation logic can be added here
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: number): void {
    // Any validation logic can be added here
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }

  public toString(): string {
    let output = '\n------ Remote Control ------\n';

    for (let i = 0; i < this.onCommands.length; i++) {
      output += `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}\n`;
    }

    output += `[undo] ${this.undoCommand.constructor.name}\n`;

    return output;
  }
}
