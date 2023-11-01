"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentPage = void 0;
const page_1 = require("../components/page");
class DeploymentPage extends page_1.Page {
    constructor(gui) {
        super('Deployments', 1, gui);
        this._page.addRow({ text: 'deployments' });
        this.makeActive();
    }
}
exports.DeploymentPage = DeploymentPage;
//# sourceMappingURL=deployment-page.js.map