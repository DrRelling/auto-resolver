import { randomPilotName } from '../random-generators-I-stole/pilots';

export class Pilot {
  public health: number;
  public morale: number;
  public maxMorale: number;

  public name = randomPilotName();

  constructor(health?: number, morale?: number, maxMorale?: number) {
    this.health = health ?? 50;
    this.morale = morale ?? 30;
    this.maxMorale = maxMorale ?? 30;
  }
}
