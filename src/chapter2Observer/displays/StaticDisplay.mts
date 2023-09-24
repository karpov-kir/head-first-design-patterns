import { WeatherConditions, WeatherData } from '../weatherStation/WeatherData.mjs';
import { DisplayElement } from './DisplayElement.js';
import { Observer } from './Observer.mjs';

export class StaticDisplay implements Observer<WeatherConditions>, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;

  constructor(private weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  public update(weatherConditions: WeatherConditions): void {
    this.temperature = weatherConditions.temperature;
    this.humidity = weatherConditions.humidity;
    this.display();
  }

  public display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}
