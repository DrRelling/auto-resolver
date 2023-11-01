import { Box, ConsoleManager, InPageWidgetBuilder } from 'console-gui-tools';
import { Page } from '../components/page';
import { globe } from '../art/globe';

const scanningBanner = new InPageWidgetBuilder().addRow({
  text: ' '.repeat(16) + 'Scanning',
  color: 'yellow',
});

const kaijuDetectedBanner = new InPageWidgetBuilder().addRow({
  text: ' '.repeat(8) + 'WARNING: KAIJU DETECTED',
  color: 'red',
});

export class WorldPage extends Page {
  private _banner: Box;
  constructor(gui: ConsoleManager) {
    super('Scanner', 1, gui);

    const halfWidth = process.stdout.columns / 2;

    const longestLine = globe
      .split('\n')
      .reduce((prev, curr) => Math.max(prev, curr.length), 0);
    const halfLine = longestLine / 2;

    globe
      .split('\n')
      .map((line) => {
        line = ' '.repeat(halfWidth - halfLine) + line;
        return line;
      })
      .forEach((line) => this._page.addRow({ text: line }));

    this._banner = new Box({
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

  private _setBannerKaiju(): void {
    this._banner.setContent(kaijuDetectedBanner);
    this._banner.setStyle({ boxed: true, color: 'red' });
  }
}
