import { MallardDuck, ModelDuck, FlyRocketPowered } from "../core/strategy";

describe("strategy", function () {
  it("MallardDuck", function () {
    const mallard = new MallardDuck();
    expect(mallard.performFly()).toBe("I'm flying");
    expect(mallard.performQuack()).toBe("Quack");
  });

  it("ModelDuck", function () {
    const model = new ModelDuck();
    expect(model.performFly()).toBe("I can't fly");
    model.setFlyBehavior(new FlyRocketPowered());
    expect(model.performFly()).toBe("I'm flying with rocket");
  });
});
