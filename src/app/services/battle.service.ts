import { Injectable } from '@angular/core';
import { Region } from '../enums/region.enum';
import { Battle } from '../classes/battle';
import { Message } from '../interfaces/message.interface';
import { BattleState } from '../enums/battleState.enum';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  interval,
} from 'rxjs';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  public battles: Battle[] = [];
  public state$ = new BehaviorSubject<BattleState>(BattleState.NONE);
  public isPaused$ = new BehaviorSubject<boolean>(true);
  public tick$ = new Subject<number>();

  private _isPaused = true;
  private _currentTick = 0;

  private _tickerSubscription?: Subscription;

  private _broadcastChannel = new BroadcastChannel('control_panel');

  constructor() {
    this._broadcastChannel.onmessage = (msg: MessageEvent<Message>) => {
      console.log(msg);
      this._addBattles(msg.data.startBattles);
    };
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
    console.log(this._currentTick);
    if (this._currentTick != null && this.tick$ != null) {
      this._currentTick += 1;
      this.tick$.next(this._currentTick);
    }
  }

  private _addBattles(noOfBattles: number): void {
    const shuffledRegions = [...Object.keys(Region)]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    for (let i = 0; i < noOfBattles; i++) {
      const region = shuffledRegions.pop();
      this.battles.push(new Battle(region as Region));
    }

    this.state$.next(BattleState.PREP);
    this.startStopTimer();
  }
}
