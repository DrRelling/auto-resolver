import { Component } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  public startRound(): void {
    const bc = new BroadcastChannel('control_panel');
    bc.postMessage('hello')
  }
}
