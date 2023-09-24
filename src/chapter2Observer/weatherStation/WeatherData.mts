import { Observer } from '../displays/Observer.mjs';
import { Subject } from './Subject.mjs';

export interface WeatherConditions {
  temperature: number;
  humidity: number;
  pressure: number;
}

/**
 * I decided to implement the push model (pass weather conditions object to observers) for this example.
 * I think this is sufficient for this task.
 * Also, the WeatherConditions interface make coupling more loose as well.
 */
export class WeatherData implements Subject<WeatherConditions> {
  private observers: Observer<WeatherConditions>[] = [];

  private weatherConditions: WeatherConditions = {
    temperature: 0,
    humidity: 0,
    pressure: 0,
  };

  public registerObserver(observer: Observer<WeatherConditions>): void {
    const index = this.observers.indexOf(observer);

    if (index >= 0) {
      console.warn('Skipping to register an observer that is already registered');
      return;
    }

    this.observers.push(observer);
  }

  public removeObserver(observer: Observer<WeatherConditions>): void {
    const index = this.observers.indexOf(observer);

    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this.weatherConditions));
  }

  public setMeasurements(weatherConditions: WeatherConditions): void {
    this.weatherConditions = weatherConditions;
  }
}
