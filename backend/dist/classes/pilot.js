"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
const pilots_1 = require("../random-generators-I-stole/pilots");
class Pilot {
    constructor(health, morale, maxMorale) {
        this.name = (0, pilots_1.randomPilotName)();
        this.health = health !== null && health !== void 0 ? health : 50;
        this.morale = morale !== null && morale !== void 0 ? morale : 30;
        this.maxMorale = maxMorale !== null && maxMorale !== void 0 ? maxMorale : 30;
    }
}
exports.Pilot = Pilot;
//# sourceMappingURL=pilot.js.map