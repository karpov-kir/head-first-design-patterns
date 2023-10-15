import { CeilingFanHighCommand } from '../common/commands/CeilingFanHighCommand.mjs';
import { CeilingFanOffCommand } from '../common/commands/CeilingFanOffCommand.mjs';
import { Command } from '../common/commands/Command.mjs';
import { GarageDoorDownCommand } from '../common/commands/GarageDoorDownCommand.mjs';
import { GarageDoorUpCommand } from '../common/commands/GarageDoorUpCommand.mjs';
import { HotTubOffCommand } from '../common/commands/HotTubOffCommand.mjs';
import { HotTubOnCommand } from '../common/commands/HotTubOnCommand.mjs';
import { LightOffCommand } from '../common/commands/LightOffCommand.mjs';
import { LightOnCommand } from '../common/commands/LightOnCommand.mjs';
import { StereoOffCommand } from '../common/commands/StereoOffCommand.mjs';
import { StereoOnWithCdCommand } from '../common/commands/StereoOnWithCdCommand.mjs';
import { TvOffCommand } from '../common/commands/TvOffCommand.mjs';
import { TvOnCommand } from '../common/commands/TvOnCommand.mjs';
import { RemoteControl } from '../common/RemoteControl.mjs';
import { CeilingFan } from '../common/smartHome/CeilingFan.mjs';
import { GarageDoor } from '../common/smartHome/GarrageDoor.mjs';
import { HotTub } from '../common/smartHome/HotTub.mjs';
import { Light } from '../common/smartHome/Light.mjs';
import { Stereo } from '../common/smartHome/Stereo.mjs';
import { Tv } from '../common/smartHome/Tv.mjs';
import { MacroCommand } from './MacroCommand.mjs';

export class RemoteLoader {
  public static run(): void {
    const remoteControl = new RemoteControl();

    const light = new Light('Living room');
    const tv = new Tv('Living room');
    const stereo = new Stereo('Living room');
    const hotTub = new HotTub();

    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

    const tvOnCommand = new TvOnCommand(tv);
    const tvOffCommand = new TvOffCommand(tv);

    const hotTubOnCommand = new HotTubOnCommand(hotTub);
    const hotTubOffCommand = new HotTubOffCommand(hotTub);

    const stereoOnWithCdCommand = new StereoOnWithCdCommand(stereo);
    const stereoOffCommand = new StereoOffCommand(stereo);

    const partyOnCommands: Command[] = [lightOnCommand, tvOnCommand, hotTubOnCommand, stereoOnWithCdCommand];
    const partyOffCommands: Command[] = [lightOffCommand, tvOffCommand, hotTubOffCommand, stereoOffCommand];

    const partyOnMacroCommand = new MacroCommand(partyOnCommands);
    const partyOffMacroCommand = new MacroCommand(partyOffCommands);

    remoteControl.setCommand(0, partyOnMacroCommand, partyOffMacroCommand);

    remoteControl.onButtonWasPushed(0);
    console.log('---');
    remoteControl.offButtonWasPushed(0);
    console.log('---');
    remoteControl.undoButtonWasPushed();

    console.log(remoteControl.toString());
  }
}
