"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomArrayElem = void 0;
function randomArrayElem(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}
exports.randomArrayElem = randomArrayElem;
//# sourceMappingURL=randomArrayElem.js.map