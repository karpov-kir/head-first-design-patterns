import { Duck } from '../duck/Duck.mjs';
import { Drone } from './Drone.mjs';

export class DroneAdapter implements Duck {
  constructor(private drone: Drone) {}

  public quack(): void {
    this.drone.beep();
  }

  public fly(): void {
    this.drone.spinRotors();
    this.drone.takeOff();
  }
}
