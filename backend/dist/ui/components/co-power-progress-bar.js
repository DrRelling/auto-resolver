"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COPowerProgressBar = exports.coPowerProgressBarLength = void 0;
const console_gui_tools_1 = require("console-gui-tools");
const removable_1 = require("../classes/removable");
exports.coPowerProgressBarLength = 60;
const style = {
    theme: 'precision',
    showMinMax: false,
    color: 'grey',
    showPercentage: true,
    showValue: false,
    showTitle: false,
};
class COPowerProgressBar extends removable_1.Removable {
    constructor(id, x, y, current) {
        super(new console_gui_tools_1.Progress({
            id,
            x,
            y,
            interactive: false,
            length: exports.coPowerProgressBarLength,
            min: 0,
            max: 100,
            value: current !== null && current !== void 0 ? current : 0,
            thickness: 1,
            style,
        }));
    }
}
exports.COPowerProgressBar = COPowerProgressBar;
//# sourceMappingURL=co-power-progress-bar.js.map