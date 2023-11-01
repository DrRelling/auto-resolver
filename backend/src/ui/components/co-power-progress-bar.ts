import { Progress, ProgressStyle } from 'console-gui-tools';
import { Removable } from '../classes/removable';

export const coPowerProgressBarLength = 60;

const style = {
  theme: 'precision',
  showMinMax: false,
  color: 'grey',
  showPercentage: true,
  showValue: false,
  showTitle: false,
} as ProgressStyle;

export class COPowerProgressBar extends Removable {
  constructor(id: string, x: number, y: number, current?: number) {
    super(
      new Progress({
        id,
        x,
        y,
        interactive: false,
        length: coPowerProgressBarLength,
        min: 0,
        max: 100,
        value: current ?? 0,
        thickness: 1,
        style,
      })
    );
  }
}
