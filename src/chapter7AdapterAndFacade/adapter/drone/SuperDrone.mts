import { Drone } from './Drone.mjs';

export class SuperDrone implements Drone {
  public beep(): void {
    console.log('Beep beep beep');
  }

  public spinRotors(): void {
    console.log('Rotors are spinning');
  }

  public takeOff(): void {
    console.log('Taking off');
  }
}
