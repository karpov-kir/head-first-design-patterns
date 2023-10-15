import { CeilingFanHighCommand } from '../common/commands/CeilingFanHighCommand.mjs';
import { CeilingFanOffCommand } from '../common/commands/CeilingFanOffCommand.mjs';
import { GarageDoorDownCommand } from '../common/commands/GarageDoorDownCommand.mjs';
import { GarageDoorUpCommand } from '../common/commands/GarageDoorUpCommand.mjs';
import { LightOffCommand } from '../common/commands/LightOffCommand.mjs';
import { LightOnCommand } from '../common/commands/LightOnCommand.mjs';
import { StereoOffCommand } from '../common/commands/StereoOffCommand.mjs';
import { StereoOnWithCdCommand } from '../common/commands/StereoOnWithCdCommand.mjs';
import { RemoteControl } from '../common/RemoteControl.mjs';
import { CeilingFan } from '../common/smartHome/CeilingFan.mjs';
import { GarageDoor } from '../common/smartHome/GarrageDoor.mjs';
import { Light } from '../common/smartHome/Light.mjs';
import { Stereo } from '../common/smartHome/Stereo.mjs';

export class RemoteLoader {
  public static run(): void {
    const remoteControl = new RemoteControl();

    const livingRoomLight = new Light('Living room');
    const kitchenLight = new Light('Kitchen');
    const ceilingFan = new CeilingFan('Living room');
    const garageDoor = new GarageDoor('Garage');
    const stereo = new Stereo('Living room');

    const livingRoomLightOnCommand = new LightOnCommand(livingRoomLight);
    const livingRoomLightOffCommand = new LightOffCommand(livingRoomLight);
    const kitchenLightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOffCommand = new LightOffCommand(kitchenLight);

    const ceilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
    const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

    const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
    const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor);

    const stereoOnWithCdCommand = new StereoOnWithCdCommand(stereo);
    const stereoOffCommand = new StereoOffCommand(stereo);

    remoteControl.setCommand(0, livingRoomLightOnCommand, livingRoomLightOffCommand);
    remoteControl.setCommand(1, kitchenLightOnCommand, kitchenLightOffCommand);
    remoteControl.setCommand(2, ceilingFanHighCommand, ceilingFanOffCommand);
    remoteControl.setCommand(3, garageDoorUpCommand, garageDoorDownCommand);
    remoteControl.setCommand(4, stereoOnWithCdCommand, stereoOffCommand);

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.undoButtonWasPushed();

    console.log('---');

    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.undoButtonWasPushed();

    console.log('---');

    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.undoButtonWasPushed();

    console.log('---');

    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
    remoteControl.undoButtonWasPushed();

    console.log('---');

    remoteControl.onButtonWasPushed(4);
    remoteControl.offButtonWasPushed(4);
    remoteControl.undoButtonWasPushed();

    console.log(remoteControl.toString());
  }
}
