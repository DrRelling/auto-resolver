import { Component, HostListener, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { combineLatest, map } from 'rxjs';
import { phaserConfig } from 'src/app/config/phaser-config.config';
import { BattleState } from 'src/app/enums/battleState.enum';
import { Region } from 'src/app/enums/region.enum';
import { Message } from 'src/app/interfaces/message.interface';
import { BattleService } from 'src/app/services/battle.service';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  public phaserGame?: Phaser.Game;

  public region = Region;

  public vm$ = combineLatest({
    currentTick: this._battleService.tick$,
    isPaused: this._battleService.isPaused$,
    money: this._moneyService.totalMoney$,
    showBattleIcons: this._battleService.state$.pipe(
      map((state) => state !== BattleState.NONE)
    ),
  });

  private _broadcastChannel = new BroadcastChannel('control_panel');

  constructor(
    private _battleService: BattleService,
    private _moneyService: MoneyService
  ) {}

  ngOnInit() {
    this.phaserGame = new Phaser.Game(phaserConfig);

    this._broadcastChannel.onmessage = (msg: MessageEvent<Message>) => {
      console.log(msg)
      const scene = this.phaserGame?.scene.getAt(0);
      this._battleService.addBattles(msg.data.battleData, scene);
    };
  }

  @HostListener('document:keydown', ['$event'])
  public updateTimer(event: KeyboardEvent): void {
    if (this._battleService.state$.getValue() === BattleState.NONE) {
      return;
    }
    if (event.key === ' ') {
      this._battleService.startStopTimer();
    } else if (event.key === 'Enter') {
      this._battleService.advanceOneTick();
    } else {
      return;
    }

    event.stopPropagation();
    event.preventDefault();
  }

  public startStop(): void {
    this._battleService.startStopTimer();
  }

  public advance(): void {
    this._battleService.advanceOneTick();
  }
}
