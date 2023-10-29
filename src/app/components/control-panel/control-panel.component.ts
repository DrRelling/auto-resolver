import { Component } from '@angular/core';
import { Region } from 'src/app/enums/region.enum';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  private _broadcastChannel = new BroadcastChannel('control_panel');

  constructor() {
    setTimeout(() => this.startRound(), 1000);
  }

  public startRound(): void {
    console.log('start')
    this._broadcastChannel.postMessage({
      battleData: { regions: this._randomRegions(2) },
    });
  }

  private _randomRegions(noOfRegions: number): string[] {
    console.log('random regions');
    const shuffledRegions = [...Object.keys(Region)]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    let result: string[] = [];

    for (let i = 0; i < noOfRegions; i++) {
      result.push(shuffledRegions.pop() ?? '');
    }

    console.log(result);

    return result;
  }
}
