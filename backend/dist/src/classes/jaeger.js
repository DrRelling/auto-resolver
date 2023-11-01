"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jaeger = void 0;
const mechas_1 = require("../random-generators-I-stole/mechas");
const combatant_1 = require("./combatant");
const pilot_1 = require("./pilot");
class Jaeger extends combatant_1.Combatant {
    get isActive() {
        if (this.pilots != null) {
            return this.health > 0 && this.pilots.every(p => p.health > 0) && this.pilots.every(p => p.morale > 0);
        }
        else {
            return this.health > 0;
        }
    }
    constructor(health, armour, attack, defence, damage, pilots) {
        super(health, armour, attack, defence, damage, [new pilot_1.Pilot(), new pilot_1.Pilot()]);
        this.name = (0, mechas_1.randomJaegerName)();
        this.maxHealth = this.health;
    }
}
exports.Jaeger = Jaeger;
//# sourceMappingURL=jaeger.js.map