"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldPage = void 0;
const console_gui_tools_1 = require("console-gui-tools");
const page_1 = require("../components/page");
const globe_1 = require("../art/globe");
const scanningBanner = new console_gui_tools_1.InPageWidgetBuilder().addRow({
    text: ' '.repeat(16) + 'Scanning',
    color: 'yellow',
});
const kaijuDetectedBanner = new console_gui_tools_1.InPageWidgetBuilder().addRow({
    text: ' '.repeat(8) + 'WARNING: KAIJU DETECTED',
    color: 'red',
});
class WorldPage extends page_1.Page {
    constructor(gui) {
        super('Scanner', 1, gui);
        const halfWidth = process.stdout.columns / 2;
        const longestLine = globe_1.globe
            .split('\n')
            .reduce((prev, curr) => Math.max(prev, curr.length), 0);
        const halfLine = longestLine / 2;
        globe_1.globe
            .split('\n')
            .map((line) => {
            line = ' '.repeat(halfWidth - halfLine) + line;
            return line;
        })
            .forEach((line) => this._page.addRow({ text: line }));
        this._banner = new console_gui_tools_1.Box({
            id: 'box1',
            x: halfWidth - 19,
            y: 13,
            width: 41,
            height: 3,
            draggable: true,
            style: {
                boxed: true,
                color: 'yellow',
            },
        }).setContent(scanningBanner);
        this.makeActive();
    }
    _setBannerKaiju() {
        this._banner.setContent(kaijuDetectedBanner);
        this._banner.setStyle({ boxed: true, color: 'red' });
    }
}
exports.WorldPage = WorldPage;
//# sourceMappingURL=world-page.js.map