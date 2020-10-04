import { Duck } from "./father";
import { Quack } from "./quackBehavior";
import { FlyWithWings, FlyNoWay } from "./flyBehavior";

export class MallardDuck extends Duck {
  constructor() {
    super();
    // 初始化行为的时候不够弹性，后续有更多的模式可用，可以修正这一点
    // 而且我们可以在运行时，通过多态的魔力动态的给它指定不同的实现类
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display() {
    return "I'm a real Mallard Duck";
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyNoWay();
  }

  public display() {
    return "I'm a model Duck";
  }
}
