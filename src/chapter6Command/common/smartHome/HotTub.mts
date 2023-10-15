export class HotTub {
  private isOn: boolean = false;
  #temperature: number = 0;

  public on(): void {
    this.isOn = true;
  }

  public off(): void {
    this.isOn = false;
  }

  public bubblesOn(): void {
    if (this.isOn) {
      console.log('Hot tub is bubbling!');
    }
  }

  public bubblesOff(): void {
    if (this.isOn) {
      console.log('Hot tub is not bubbling');
    }
  }

  public jetsOn(): void {
    if (this.isOn) {
      console.log('Hot tub jets are on');
    }
  }

  public jetsOff(): void {
    if (this.isOn) {
      console.log('Hot tub jets are off');
    }
  }

  public setTemperature(temperature: number): void {
    // Any validation logic can be added here
    this.#temperature = temperature;
  }

  public get temperature(): number {
    return this.#temperature;
  }

  public heat(): void {
    this.#temperature = 105;
    console.log('Hot tub is heating to a steaming 105 degrees');
  }

  public cool(): void {
    this.#temperature = 98;
    console.log('Hot tub is cooling to 98 degrees');
  }
}
