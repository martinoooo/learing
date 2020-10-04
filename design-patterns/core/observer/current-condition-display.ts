import { Observer } from "./observer";
import { DisplayElement } from "./display-element";
import { WeatherData } from "./weather-data";

export class CurrentConditionDisplay implements Observer, DisplayElement {
  private temp: number;
  private humidity: number;
  private pressure: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  public display() {
    return `Current Condition: ${this.temp}, ${this.humidity}, ${this.pressure}`;
  }
}
