import { FlyBehavior } from "./flyBehavior";
import { QuackBehavior } from "./quackBehavior";

export abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  public abstract display(): void;

  public performFly() {
    return this.flyBehavior.fly();
  }

  public performQuack() {
    return this.quackBehavior.quack();
  }

  public swim() {
    return "all duck float, even decoys";
  }
}
