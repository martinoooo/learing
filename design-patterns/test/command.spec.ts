import {
  Light,
  LightOnCommand,
  LightOffCommand,
  SimpleRemoteControl,
  RemoteControl,
} from "../core/command";

describe("command", function () {
  it("SimpleRemoteControl", function () {
    const remote = new SimpleRemoteControl();
    const light = new Light();
    const lightOn = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
    expect(light.light).toBe(true);
  });

  it("RemoteControl", function () {
    const remoteControl = new RemoteControl();
    const light = new Light();
    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);

    remoteControl.setCommand(0, lightOn, lightOff);
    remoteControl.onButtonWasPressed(0);
    expect(light.light).toBe(true);
    remoteControl.offButtonWasPressed(0);
    expect(light.light).toBe(false);
  });
});
