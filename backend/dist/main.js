"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battle_1 = require("./classes/battle");
const jaeger_1 = require("./classes/jaeger");
const kaiju_1 = require("./classes/kaiju");
const jaegers = [];
const kaiju = [];
for (let i = 0; i < 3; i++) {
    jaegers.push(new jaeger_1.Jaeger());
    kaiju.push(new kaiju_1.Kaiju());
}
new battle_1.Battle(jaegers, kaiju);
//# sourceMappingURL=main.js.map