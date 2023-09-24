import { WeatherConditions, WeatherData } from '../weatherStation/WeatherData.mjs';
import { DisplayElement } from './DisplayElement.js';
import { Observer } from './Observer.mjs';

export class CurrentConditionsDisplay implements Observer<WeatherConditions>, DisplayElement {
  private temperature: number[] = [];
  private min: number = 0;
  private max: number = 0;
  private average: number = 0;

  constructor(private weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  private updateStats(): void {
    this.min = Math.min(...this.temperature);
    this.max = Math.max(...this.temperature);
    this.average =
      this.temperature.reduce((accumulator, newValue) => accumulator + newValue, 0) / this.temperature.length;
  }

  public update(weatherConditions: WeatherConditions): void {
    this.temperature.push(weatherConditions.temperature);
    this.updateStats();
    this.display();
  }

  public display(): void {
    console.log(`Avg/Max/Min temperature = ${this.average}/${this.max}/${this.min}`);
  }
}
