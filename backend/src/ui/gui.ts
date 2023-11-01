import { BoxStyle, ConfirmPopup, ConsoleManager } from 'console-gui-tools';
import { SummaryPage } from './pages/summary-page';
import { WorldPage } from './pages/world-page';
import { DeploymentPage } from './pages/deployment-page';
import { Page } from './components/page';

const closeApp = () => {
  console.clear();
  process.exit();
};

const GUI = new ConsoleManager({
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


new SummaryPage(GUI);
let currentPage: Page = new WorldPage(GUI);

GUI.on('exit', closeApp);

GUI.on('keypressed', (key) => {
  switch (key.name) {
    case 'q':
      closeApp();
      break;
    case 'w':
      currentPage.makeInactive();
      currentPage = new WorldPage(GUI);
      break;
    case 'd':
      currentPage.makeInactive();
      currentPage = new DeploymentPage(GUI);
    default:
      break;
  }
});
