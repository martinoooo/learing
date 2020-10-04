// 抽象工厂：定义了一个接口，所有的具体工厂都必须实现此接口，这个接口包含一组方法来生产产品
export interface PizzaIngredientFactory {
  createDough(): string;
  createSauce(): string;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough() {
    return "createDough";
  }

  public createSauce() {
    return "createSauce";
  }
}

export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;

  /**
   * prepare声明成抽象。在这个方法中我们需要收集pizza所需要的原料，而这些原料来自于料理工厂
   */
  public abstract prepare(): string;

  public bake() {
    return "bake";
  }
  public cut() {
    return "cut";
  }
  public box() {
    return "box";
  }
  public setName(name: string) {
    this.name = name;
  }
}

export class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare() {
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    return `name: ${this.name}, dough: ${this.dough}, sauce:${this.sauce}`;
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
  ingredientFactory = new NYPizzaIngredientFactory();

  public createPizza(type: string): Pizza {
    let pizza;
    if (type === "cheese") {
      pizza = new CheesePizza(this.ingredientFactory);
      pizza.setName("cheese");
    } else {
      pizza = new CheesePizza(this.ingredientFactory);
      pizza.setName("defalut");
    }
    return pizza;
  }
}
