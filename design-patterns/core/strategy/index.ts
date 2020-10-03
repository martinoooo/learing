interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

abstract class Duck {
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

class FlyWithWings implements FlyBehavior {
  public fly() {
    return "I'm flying";
  }
}

class FlyNoWay implements FlyBehavior {
  public fly() {
    return "I can't fly";
  }
}

export class FlyRocketPowered implements FlyBehavior {
  public fly() {
    return "I'm flying with rocket";
  }
}

class Quack implements QuackBehavior {
  public quack() {
    return "Quack";
  }
}

class MuteQuack implements QuackBehavior {
  public quack() {
    return "Silence";
  }
}

class Squeak implements QuackBehavior {
  public quack() {
    return "Squeak";
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super();
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
