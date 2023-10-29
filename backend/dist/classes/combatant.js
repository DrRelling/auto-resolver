"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combatant = void 0;
class Combatant {
    constructor(health, armour, attack, defence, damage, pilots) {
        this.health = health !== null && health !== void 0 ? health : 100;
        this.maxHealth = health !== null && health !== void 0 ? health : 100;
        this.armour = armour !== null && armour !== void 0 ? armour : 3;
        this.attack = attack !== null && attack !== void 0 ? attack : 14;
        this.defence = defence !== null && defence !== void 0 ? defence : 2;
        this.damage = damage !== null && damage !== void 0 ? damage : 10;
        this.pilots = pilots;
    }
}
exports.Combatant = Combatant;
//# sourceMappingURL=combatant.js.map