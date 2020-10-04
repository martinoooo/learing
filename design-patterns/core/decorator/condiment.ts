import { Beverage } from "./beverage";

export abstract class CondimentDecorator extends Beverage {
  public abstract getDescritption(): string;
}
