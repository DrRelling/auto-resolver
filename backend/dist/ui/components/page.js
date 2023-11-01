"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const console_gui_tools_1 = require("console-gui-tools");
class Page {
    constructor(_title, _pageIdx, _gui) {
        this._title = _title;
        this._pageIdx = _pageIdx;
        this._gui = _gui;
        this.id = 'id';
        this._components = [];
        this._page = new console_gui_tools_1.PageBuilder();
    }
    makeActive() {
        this._gui.setPage(this._page, this._pageIdx, this._title);
    }
    makeInactive() {
        this._components.forEach((c) => c.remove());
        this._components = [];
    }
}
exports.Page = Page;
//# sourceMappingURL=page.js.map