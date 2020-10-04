export abstract class Beverage {
  description = "UNKNOW BEVERAGE";

  public getDescritption() {
    return this.description;
  }

  public abstract cost(): number;
}
