import { WeatherConditions, WeatherData } from '../weatherStation/WeatherData.mjs';
import { DisplayElement } from './DisplayElement.js';
import { Observer } from './Observer.mjs';

export class ForecastDisplay implements Observer<WeatherConditions>, DisplayElement {
  private lastPressure: number = 0;
  private currentPressure: number = 29.92;

  constructor(private weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  public update(weatherConditions: WeatherConditions): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = weatherConditions.pressure;
    this.display();
  }

  public display(): void {
    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    }

    if (this.currentPressure === this.lastPressure) {
      console.log('Weather is more of the same');
    }

    if (this.currentPressure < this.lastPressure) {
      console.log('Watch out for cooler, rainy weather');
    }
  }
}
