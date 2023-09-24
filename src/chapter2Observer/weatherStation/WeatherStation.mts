import { CurrentConditionsDisplay } from '../displays/CurrentConditionsDisplay.mjs';
import { ForecastDisplay } from '../displays/ForecastDisplay.mjs';
import { HeatIndexDisplay } from '../displays/HeatIndexDisplay.mjs';
import { StaticDisplay } from '../displays/StaticDisplay.mjs';
import { WeatherData } from './WeatherData.mjs';

export class WeatherStation {
  public static run(): void {
    console.log('Weather station is doing its job and displays are displaying some data');

    const weatherData = new WeatherData();

    new StaticDisplay(weatherData);
    new CurrentConditionsDisplay(weatherData);
    new ForecastDisplay(weatherData);
    new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements({
      temperature: 80,
      humidity: 65,
      pressure: 30.4,
    });
    weatherData.notifyObservers();
    weatherData.setMeasurements({
      temperature: 82,
      humidity: 70,
      pressure: 29.2,
    });
    weatherData.notifyObservers();
    weatherData.setMeasurements({
      temperature: 78,
      humidity: 90,
      pressure: 29.2,
    });
    weatherData.notifyObservers();
  }
}
