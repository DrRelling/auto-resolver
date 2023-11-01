import { Injectable } from '@angular/core';
import { Region } from '../enums/region.enum';
import { Battle } from '../classes/battle';
import { BattleData, Message } from '../interfaces/message.interface';
import { BattleState } from '../enums/battleState.enum';
import { BehaviorSubject, Subject, Subscription, interval } from 'rxjs';
import { config } from '../config/config';
import { PhaserScene } from '../classes/phaser-scene';
import { Scene } from 'phaser';
import { MoneyService } from './money.service';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  private static instance: BattleService;
  static getInstance() {
    return BattleService.instance;
  }
  
  public battles: Battle[] = [];
  public state$ = new BehaviorSubject<BattleState>(BattleState.NONE);
  public isPaused$ = new BehaviorSubject<boolean>(true);
  public tick$ = new Subject<number>();

  private _isPaused = true;
  private _currentTick = 0;

  private _tickerSubscription?: Subscription;

  constructor() {
    BattleService.instance = this;
  }

  public startStopTimer(): void {
    if (this._isPaused) {
      this._tickerSubscription = interval(config.game.timerInterval).subscribe(
        () => this._tick()
      );
    } else {
      this._tickerSubscription?.unsubscribe();
    }
    this._isPaused = !this._isPaused;
    this.isPaused$.next(this._isPaused);
  }

  public advanceOneTick(): void {
    if (this._isPaused) {
      this._tick();
    }
  }

  public updateBattle(region: Region): void {}

  private _tick(): void {
    if (this._currentTick != null && this.tick$ != null) {
      this._currentTick += 1;
      this.tick$.next(this._currentTick);
    }
  }

  public addBattles(battleData: BattleData, scene?: Scene): void {
    if (scene == null) {
      console.error('No scene provided');
      return;
    }
    battleData.regions.forEach(
      (region) => new Battle(region as Region, scene as PhaserScene)
    );

    this.state$.next(BattleState.PREP);
    this.startStopTimer();
  }
}
