"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_gui_tools_1 = require("console-gui-tools");
const summary_page_1 = require("./pages/summary-page");
const world_page_1 = require("./pages/world-page");
const deployment_page_1 = require("./pages/deployment-page");
const closeApp = () => {
    console.clear();
    process.exit();
};
const GUI = new console_gui_tools_1.ConsoleManager({
    enableMouse: true,
    title: 'Kaiju Biomass Detection Scanner v3.7.2',
    showLogKey: 'l',
    logPageSize: 10,
    overrideConsole: true,
    logLocation: 'popup',
    layoutOptions: {
        boxed: true,
        showTitle: true,
        type: 'double',
    },
});
new summary_page_1.SummaryPage(GUI);
let currentPage = new world_page_1.WorldPage(GUI);
GUI.on('exit', closeApp);
GUI.on('keypressed', (key) => {
    switch (key.name) {
        case 'q':
            closeApp();
            break;
        case 'w':
            currentPage.makeInactive();
            currentPage = new world_page_1.WorldPage(GUI);
            break;
        case 'd':
            currentPage.makeInactive();
            currentPage = new deployment_page_1.DeploymentPage(GUI);
        default:
            break;
    }
});
//# sourceMappingURL=gui.js.map