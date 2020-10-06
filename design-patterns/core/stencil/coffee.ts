import { CaffeineBevarage } from "./beverage";

export class Coffee extends CaffeineBevarage {
  public brew() {
    return "brewCoffeeGrinds";
  }
  public addCondiments() {
    return "addSugruAndMilk";
  }
}
