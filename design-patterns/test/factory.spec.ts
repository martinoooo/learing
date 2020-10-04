import { NYPizzaStore } from "../core/factory/method";
import { NYPizzaStore as NYPizzaStore2 } from "../core/factory/abstract";

describe("factory", function () {
  it("method", function () {
    const nyStore = new NYPizzaStore();
    const pizza = nyStore.orderPizza("cheese");

    expect(pizza.name).toBe("NYStyleCheessPizza");
  });

  it("abstract", function () {
    const nyStore = new NYPizzaStore2();
    const pizza = nyStore.orderPizza("cheese");

    expect(pizza.name).toBe("cheese");
  });
});
