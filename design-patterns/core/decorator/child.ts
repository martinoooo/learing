import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "espresso";
  }

  public cost() {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "hosuse blend coffee";
  }

  public cost() {
    return 0.89;
  }
}

export class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescritption() {
    return this.beverage.getDescritption() + ", Mocha";
  }

  public cost() {
    return this.beverage.cost() + 0.2;
  }
}
