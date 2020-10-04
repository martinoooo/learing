export interface FlyBehavior {
  fly(): void;
}

export class FlyWithWings implements FlyBehavior {
  public fly() {
    return "I'm flying";
  }
}

export class FlyNoWay implements FlyBehavior {
  public fly() {
    return "I can't fly";
  }
}

export class FlyRocketPowered implements FlyBehavior {
  public fly() {
    return "I'm flying with rocket";
  }
}
