import { Command, NoCommand } from "./command";

export class SimpleRemoteControl {
  slot: Command;

  public setCommand(command: Command) {
    this.slot = command;
  }

  public buttonWasPressed() {
    this.slot.execute();
  }
}

export class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPressed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPressed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPressed() {
    this.undoCommand.undo();
  }
}
