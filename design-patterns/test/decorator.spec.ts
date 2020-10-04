import { Espresso, HouseBlend, Mocha } from "../core/decorator";

describe("decorator", function () {
  it("Espresso", function () {
    const espresso = new Espresso();
    expect(espresso.getDescritption()).toBe("espresso");
    expect(espresso.cost()).toBe(1.99);

    let houseBlend = new HouseBlend();
    houseBlend = new Mocha(houseBlend);
    houseBlend = new Mocha(houseBlend);
    expect(houseBlend.getDescritption()).toBe(
      "hosuse blend coffee, Mocha, Mocha"
    );
    expect(houseBlend.cost()).toBe(1.29);
  });
});
