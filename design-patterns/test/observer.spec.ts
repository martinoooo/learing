import { WeatherData, CurrentConditionDisplay } from "../core/observer";

describe("observer", function () {
  it("WeatherData", function () {
    const weatherData = new WeatherData();
    const currentDisplay = new CurrentConditionDisplay(weatherData);

    const spy = jest.spyOn(currentDisplay, "display");

    weatherData.setMeasurements(80, 60, 30);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveReturnedWith("Current Condition: 80, 60, 30");

    spy.mockReset();
    spy.mockRestore();
  });
});
