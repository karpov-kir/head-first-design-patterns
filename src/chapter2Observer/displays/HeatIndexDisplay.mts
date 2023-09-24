import { WeatherConditions, WeatherData } from '../weatherStation/WeatherData.mjs';
import { DisplayElement } from './DisplayElement.js';
import { Observer } from './Observer.mjs';

export class HeatIndexDisplay implements Observer<WeatherConditions>, DisplayElement {
  private heatIndex: number = 0;

  constructor(private weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  public update(weatherConditions: WeatherConditions): void {
    const t = weatherConditions.temperature;
    const rh = weatherConditions.humidity;

    this.heatIndex =
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * t ** 2 +
      0.00728898 * rh ** 2 +
      0.000345372 * (t ** 2 * rh) -
      0.000814971 * (t * rh ** 2) +
      0.0000102102 * (t ** 2 * rh ** 2) -
      0.000038646 * t ** 3 +
      0.0000291583 * rh ** 3 +
      0.00000142721 * (t ** 3 * rh) +
      0.000000197483 * (t * rh ** 3) -
      0.0000000218429 * (t ** 3 * rh ** 2) +
      0.000000000843296 * (t ** 2 * rh ** 3) -
      0.0000000000481975 * (t ** 3 * rh ** 3);

    this.display();
  }

  public display(): void {
    console.log(`Heat index is ${this.heatIndex}`);
  }
}
