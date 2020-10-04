export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;

  public prepare() {
    return `name: ${this.name}, dough: ${this.dough}, sauce:${this.sauce}`;
  }

  public bake() {
    return "bake";
  }
  public cut() {
    return "cut";
  }
  public box() {
    return "box";
  }
}

export class NYStyleCheessPizza extends Pizza {
  constructor() {
    super();
    this.name = "NYStyleCheessPizza";
    this.dough = "NYStyleCheessPizza";
    this.sauce = "NYStyleCheessPizza";
  }
}

export class NYStylePizza extends Pizza {
  constructor() {
    super();
    this.name = "NYStylePizza";
    this.dough = "NYStylePizza";
    this.sauce = "NYStylePizza";
  }

  public cut() {
    return "NYStylePizza cut";
  }
}

export abstract class PizzaStore {
  public orderPizza(type: string) {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new NYStyleCheessPizza();
    }
    return new NYStylePizza();
  }
}
