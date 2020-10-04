import { Subject } from "./subject";
import { Observer } from "./observer";

export class WeatherData implements Subject {
  private oberservers: Observer[];
  private temp: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.oberservers = [];
  }

  public registerObserver(o: Observer) {
    this.oberservers.push(o);
  }

  public removeObserver(o: Observer) {
    const i = this.oberservers.indexOf(o);
    if (i >= 0) {
      this.oberservers.splice(i, 1);
    }
  }

  public notifyObsersers() {
    this.oberservers.forEach((o) => {
      o.update(this.temp, this.humidity, this.pressure);
    });
  }

  public measurementsChanged() {
    this.notifyObsersers();
  }

  public setMeasurements(temp: number, humidity: number, pressure: number) {
    this.humidity = humidity;
    this.temp = temp;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
