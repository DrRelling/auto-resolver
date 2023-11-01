import { randomKaijuName } from '../random-generators-I-stole/kaiju';
import { Combatant } from './combatant';

export class Kaiju extends Combatant {
  public name = randomKaijuName();

  public get isActive(): boolean {
    return this.health > 0;
  }

  constructor(
    health?: number,
    armour?: number,
    attack?: number,
    defence?: number,
    damage?: number
  ) {
    super(health, armour, attack, defence, damage);
  }
}
