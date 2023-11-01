"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshConfig = void 0;
const xlsx_1 = require("xlsx");
const configRefs = {
    kaiju: {},
    pilot: {
        health: 'B1',
        morale: 'B2',
        maxMorale: 'B3',
    },
};
function refreshConfig() {
    const file = (0, xlsx_1.readFile)('./testInput.xlsx');
    return Object.keys(configRefs).reduce((config, sheetName) => {
        config[sheetName] = Object.keys(configRefs[sheetName]).reduce((sheet, key) => {
            var _a;
            const cellRef = configRefs[sheetName][key];
            sheet[key] = (_a = file.Sheets[sheetName][cellRef]) === null || _a === void 0 ? void 0 : _a.v;
            return sheet;
        }, {});
        return config;
    }, {});
}
exports.refreshConfig = refreshConfig;
//# sourceMappingURL=config.js.map