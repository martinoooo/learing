export interface Duck {
  quack(): string;
  fly(): string;
}

export interface Turkey {
  gobble(): string;
  fly(): string;
}

export class WildTurkey implements Turkey {
  public gobble() {
    return "gobble gobble";
  }

  public fly() {
    return "fly";
  }
}

export class TurkeyAdaptor implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  public quack() {
    return this.turkey.gobble();
  }

  public fly() {
    return this.turkey.fly();
  }
}
