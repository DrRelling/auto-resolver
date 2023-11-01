import { Button, ButtonStyle, ConsoleManager } from 'console-gui-tools';
import { Page } from '../components/page';

const buttonStyle = {
  color: 'cyanBright',
  borderColor: 'cyan',
} as ButtonStyle;

const playIcon = '⏵';
const pauseIcon = '⏸';
const stepIcon = '⏯';

export class SummaryPage extends Page {
  public get height(): number {
    return this._page.getPageHeight();
  }

  private _showBattleComponents = false;
  private _playing = true;

  private _playPauseButton = new Button({
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
      } else {
        this._playPauseButton.setText(pauseIcon);
      }
      this._playing = !this._playing;
    },
  });
  private _stepButton = new Button({
    id: 'stepButton',
    text: stepIcon,
    width: 6,
    x: process.stdout.columns - 16,
    y: 1,
    style: buttonStyle,
    key: { name: 'return' },
  });

  constructor(gui: ConsoleManager) {
    super('Summary', 0, gui);

    this._page.addSpacer(3)

    this.makeActive();
  }
}
