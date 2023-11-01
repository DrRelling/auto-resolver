import { Pilot } from "./pilot";

export abstract class Combatant {
  public health: number;
  public maxHealth: number;
  public armour: number;
  public attack: number;
  public defence: number;
  public damage: number;

  public name: string;
  public pilots?: Pilot[];

  constructor(
    health?: number,
    armour?: number,
    attack?: number,
    defence?: number,
    damage?: number,
    pilots?: Pilot[]
  ) {
    this.health = health ?? 100;
    this.maxHealth = health ?? 100;
    this.armour = armour ?? 3;
    this.attack = attack ?? 14;
    this.defence = defence ?? 2;
    this.damage = damage ?? 10;
    this.pilots = pilots;
  }
}
