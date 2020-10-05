import { WildTurkey, TurkeyAdaptor } from "../core/adaptor";

describe("adaptor", function () {
  it("SimpleRemoteControl", function () {
    const turkey = new WildTurkey();
    const turkeyAdaptor = new TurkeyAdaptor(turkey);

    expect(turkeyAdaptor.quack()).toBe("gobble gobble");
  });
});
