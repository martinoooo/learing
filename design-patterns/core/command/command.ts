export interface Command {
  execute(): void;
  undo(): void;
}

export class Light {
  light: Boolean;

  public on() {
    this.light = true;
  }

  public off() {
    this.light = false;
  }
}

export class Stereo {
  stereo: any;

  public on() {
    this.stereo.on = true;
  }

  public off() {
    this.stereo.on = false;
  }

  public setCD() {
    this.stereo.cd = "cd";
  }
  public setVolume(n: number) {
    this.stereo.volome = n;
  }
}

export class NoCommand implements Command {
  public execute() {}
  public undo() {}
}

export class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute() {
    this.light.on();
  }

  public undo() {
    this.light.off();
  }
}

export class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute() {
    this.light.off();
  }

  public undo() {
    this.light.on();
  }
}

export class StereoOnWithCDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute() {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  public undo() {
    this.stereo.off();
  }
}
