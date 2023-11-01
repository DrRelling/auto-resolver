"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_gui_tools_1 = require("console-gui-tools");
// const jaegers: Jaeger[] = [];
// const kaiju: Kaiju[] = [];
// for (let i = 0; i < 3; i++) {
//   jaegers.push(new Jaeger());
//   kaiju.push(new Kaiju());
// }
// new Battle(jaegers, kaiju);
const GUI = new console_gui_tools_1.ConsoleManager({
    title: 'Scanning for Kaiju Biomass...',
    logPageSize: 8,
    showLogKey: 'ctrl+l',
    layoutOptions: {
        type: 'single',
    },
    enableMouse: true
});
const closeApp = () => {
    console.clear();
    process.exit();
};
GUI.on("exit", () => {
    closeApp();
});
GUI.on("keypressed", (key) => {
    switch (key.name) {
        case "q":
            new console_gui_tools_1.ConfirmPopup({
                id: "popupQuit",
                title: "Are you sure you want to quit?"
            }).show().on("confirm", () => closeApp());
            break;
        default:
            break;
    }
});
const btnProps = {
    id: "btnClickMe",
    text: "Click Me! (Ctrl+R)",
    x: 10,
    y: 15,
    key: { name: "r", ctrl: true },
};
const button = new console_gui_tools_1.Button(btnProps);
button.on("click", () => {
    button.absoluteValues.x = Math.floor(Math.random() * 30);
    button.absoluteValues.y = Math.floor(Math.random() * 30);
    GUI.refresh();
});
GUI.refresh();
//# sourceMappingURL=main.js.map