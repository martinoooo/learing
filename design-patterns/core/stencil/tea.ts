import { CaffeineBevarage } from "./beverage";

export class Tea extends CaffeineBevarage {
  public brew() {
    return "stepTeaBag";
  }

  public addCondiments() {
    return "addSugruAndMilk";
  }
}
