import { CeilingFan, CeilingFanSpeed } from '../smartHome/CeilingFan.mjs';

export class CeilingFanUndo {
  protected previousSpeed: CeilingFanSpeed = CeilingFanSpeed.Off;

  constructor(protected ceilingFan: CeilingFan) {}

  public undo(): void {
    if (this.previousSpeed === CeilingFanSpeed.High) {
      this.ceilingFan.high();
    } else if (this.previousSpeed === CeilingFanSpeed.Medium) {
      this.ceilingFan.medium();
    } else if (this.previousSpeed == CeilingFanSpeed.Low) {
      this.ceilingFan.low();
    } else if (this.previousSpeed == CeilingFanSpeed.Off) {
      this.ceilingFan.off();
    }
  }
}
