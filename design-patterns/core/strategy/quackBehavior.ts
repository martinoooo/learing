export interface QuackBehavior {
  quack(): void;
}

export class Quack implements QuackBehavior {
  public quack() {
    return "Quack";
  }
}

export class MuteQuack implements QuackBehavior {
  public quack() {
    return "Silence";
  }
}

export class Squeak implements QuackBehavior {
  public quack() {
    return "Squeak";
  }
}
