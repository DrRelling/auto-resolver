import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  public totalMoney$ = new BehaviorSubject(config.game.startingMoney);
  public availableMoney$ = new BehaviorSubject(config.game.startingMoney);

  private _totalMoney = config.game.startingMoney;
  private _availableMoney = config.game.startingMoney;

  constructor() {}

  public commitMoney(amount: number): void {
    this._availableMoney -= amount;
    this.availableMoney$.next(this._availableMoney);
  }

  public uncommitMoney(amount: number): void {
    this._availableMoney += amount;
    this.availableMoney$.next(this._availableMoney);
  }

  public setTotalMoney(amount: number): void {
    this._totalMoney = amount;
    this.totalMoney$.next(this._totalMoney);
  }

  public resetAvailableMoney(): void {
    this._availableMoney = this._totalMoney;
    this.availableMoney$.next(this._availableMoney);
  }
}
