import { randomJaegerName } from '../random-generators-I-stole/mechas';
import { Combatant } from './combatant';
import { Pilot } from './pilot';

export class Jaeger extends Combatant {
  public maxHealth: number;
  public name = randomJaegerName();

  public get isActive(): boolean {
    if (this.pilots != null) {
      return this.health > 0 && this.pilots.every(p => p.health > 0) && this.pilots.every(p => p.morale > 0);
    } else {
      return this.health > 0;
    }
  }

  constructor(
    health?: number,
    armour?: number,
    attack?: number,
    defence?: number,
    damage?: number,
    pilots?: Pilot[],
  ) {
    super(health, armour, attack, defence, damage, [new Pilot(), new Pilot()]);
    this.maxHealth = this.health;
  }
}
