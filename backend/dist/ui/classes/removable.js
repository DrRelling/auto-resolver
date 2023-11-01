"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Removable = void 0;
class Removable {
    constructor(_control) {
        this._control = _control;
    }
    remove() {
        this._control.delete();
    }
}
exports.Removable = Removable;
//# sourceMappingURL=removable.js.map