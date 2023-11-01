import { Control } from 'console-gui-tools';

export abstract class Removable {
  constructor(protected _control: Control) {}

  public remove(): void {
    this._control.delete();
  }
}
