"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kaiju = void 0;
const kaiju_1 = require("../random-generators-I-stole/kaiju");
const combatant_1 = require("./combatant");
class Kaiju extends combatant_1.Combatant {
    get isActive() {
        return this.health > 0;
    }
    constructor(health, armour, attack, defence, damage) {
        super(health, armour, attack, defence, damage);
        this.name = (0, kaiju_1.randomKaijuName)();
    }
}
exports.Kaiju = Kaiju;
//# sourceMappingURL=kaiju.js.map