import { ConsoleManager } from 'console-gui-tools';
import { Page } from '../components/page';

export class DeploymentPage extends Page {
  constructor(gui: ConsoleManager) {
    super('Deployments', 1, gui);

    this._page.addRow({text: 'deployments'})
    this.makeActive();
  }
}
