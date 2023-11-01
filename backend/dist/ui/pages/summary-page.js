"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryPage = void 0;
const console_gui_tools_1 = require("console-gui-tools");
const page_1 = require("../components/page");
const buttonStyle = {
    color: 'cyanBright',
    borderColor: 'cyan',
};
const playIcon = '⏵';
const pauseIcon = '⏸';
const stepIcon = '⏯';
class SummaryPage extends page_1.Page {
    get height() {
        return this._page.getPageHeight();
    }
    constructor(gui) {
        super('Summary', 0, gui);
        this._showBattleComponents = false;
        this._playing = true;
        this._playPauseButton = new console_gui_tools_1.Button({
            id: 'playPauseButton',
            text: pauseIcon,
            width: 5,
            x: process.stdout.columns - 8,
            y: 1,
            style: buttonStyle,
            key: { name: 'space' },
            onClick: () => {
                if (this._playing) {
                    this._playPauseButton.setText(playIcon);
                }
                else {
                    this._playPauseButton.setText(pauseIcon);
                }
                this._playing = !this._playing;
            },
        });
        this._stepButton = new console_gui_tools_1.Button({
            id: 'stepButton',
            text: stepIcon,
            width: 6,
            x: process.stdout.columns - 16,
            y: 1,
            style: buttonStyle,
            key: { name: 'return' },
        });
        this._page.addSpacer(3);
        this.makeActive();
    }
}
exports.SummaryPage = SummaryPage;
//# sourceMappingURL=summary-page.js.map