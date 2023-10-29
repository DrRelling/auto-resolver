"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const randomArrayElem_1 = require("../utils/randomArrayElem");
class Battle {
    get _done() {
        return this._activeJaegers.length === 0 || this._activeKaiju.length === 0;
    }
    constructor(jaegers, kaiju) {
        this._jaegers = jaegers;
        this._kaiju = kaiju;
        while (!this._done) {
            this._tick();
        }
        this._displayResult();
    }
    get _activeJaegers() {
        return this._jaegers.filter((j) => j.isActive);
    }
    get _activeKaiju() {
        return this._kaiju.filter((k) => k.isActive);
    }
    _tick() {
        this._oneSideAttacks(this._activeJaegers, () => this._activeKaiju);
        this._oneSideAttacks(this._activeKaiju, () => this._activeJaegers);
    }
    _oneSideAttacks(attackers, defenders) {
        attackers.forEach((attacker) => {
            if (defenders().length === 0) {
                return;
            }
            const target = (0, randomArrayElem_1.randomArrayElem)(defenders());
            this._attack(attacker, target);
        });
    }
    _attack(attacker, defender) {
        const attackRoll = Math.random() * 20;
        const targetNumber = attacker.attack - defender.defence;
        if (attackRoll <= targetNumber) {
            let damageRoll = Math.round(attacker.damage * (Math.random() + 0.5));
            if (defender.armour > 0) {
                damageRoll = Math.min(damageRoll - defender.armour, 1);
                defender.armour -= 1;
            }
            console.log(`${attacker.name} hits ${defender.name} for ${damageRoll} damage!`);
            this._updateAttacker(attacker, damageRoll);
            this._updateDefender(defender, damageRoll);
        }
        else {
            console.log(`${attacker.name} misses ${defender.name}`);
        }
    }
    _updateAttacker(attacker, damageRoll) {
        if (attacker.pilots != null) {
            attacker.pilots.forEach((pilot) => (pilot.morale = Math.min(pilot.morale + damageRoll * (Math.random() * 2), pilot.maxMorale)));
        }
    }
    _updateDefender(defender, damageRoll) {
        defender.health -= damageRoll;
        if (defender.health <= 0) {
            console.log(`${defender.name} was destroyed!`);
        }
        if (defender.pilots != null) {
            if (defender.health < defender.maxHealth / 2) {
                defender.pilots.forEach((pilot) => {
                    pilot.health -= Math.round(damageRoll * Math.random());
                    pilot.morale -= Math.round(damageRoll * Math.random());
                });
            }
            if (defender.health <= 0) {
                defender.pilots.forEach((p) => (p.health = Math.random() > 0.5 ? p.health : 0));
            }
            defender.pilots.forEach((pilot) => {
                if (pilot.health <= 0) {
                    console.log(`${pilot.name} (${defender.name}) was killed!`);
                }
                else if (pilot.morale <= 0) {
                    console.log(`${pilot.name} (${defender.name}) fled!`);
                }
            });
        }
    }
    _displayResult() {
        console.log('\n--- RESULT ---');
        console.log('\nJaegers:');
        this._jaegers.forEach((j) => {
            if (j.health <= 0) {
                console.log(` - ${j.name}: \x1b[31mDESTROYED\x1b[0m`);
            }
            else {
                console.log(` - ${j.name}: \x1b[32mSURVIVED\x1b[0m`);
            }
            if (j.pilots != null) {
                j.pilots.forEach((pilot) => {
                    if (pilot.health > 0) {
                        console.log(` - - Pilot ${pilot.name}: \x1b[32mSURVIVED\x1b[0m`);
                    }
                    else {
                        console.log(` - - Pilot ${pilot.name}: \x1b[31mKILLED\x1b[0m`);
                    }
                });
            }
        });
        console.log('\nKaiju:');
        this._kaiju.forEach((k) => {
            if (k.health <= 0) {
                console.log(` - ${k.name}: \x1b[32mDESTROYED\x1b[0m`);
            }
            else {
                console.log(` - ${k.name}: \x1b[31mSURVIVED\x1b[0m`);
            }
        });
        console.log();
        if (this._activeJaegers.length === 0) {
            console.log('Kaiju win. This looks bad for humanity...');
        }
        else {
            console.log('Jaegers win! A little hope is restored!');
        }
    }
}
exports.Battle = Battle;
//# sourceMappingURL=battle.js.map