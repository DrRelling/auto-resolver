import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, startWith } from 'rxjs';
import { RegionData, world } from 'src/app/data/world';
import { Region } from 'src/app/enums/region.enum';
import { BattleService } from 'src/app/services/battle.service';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent implements OnInit {
  @Input() public set regionKey(value: Region) {
    this.region = world[value];
    this._regionKey = value;
  }
  public region: RegionData | null = null;

  public vm$ = combineLatest({
    availableMoney: this._moneyService.availableMoney$,
    totalMoney: this._moneyService.totalMoney$,
    tick: this._battleService.tick$.pipe(startWith(0))
  })

  private _regionKey = Region.africa;

  public committedMoney = 0;

  constructor(
    private _battleService: BattleService,
    private _moneyService: MoneyService
  ) {}

  public ngOnInit(): void {
    this._battleService.updateBattle(this._regionKey);
  }

  public commitMoney = (amount: number) => {
    this.committedMoney += amount;
    this._moneyService.commitMoney(amount)
  };
  public uncommitMoney = (amount: number) => {
    this.committedMoney -= amount;
    this._moneyService.uncommitMoney(amount)
  };
}
