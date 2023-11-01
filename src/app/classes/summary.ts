import { config } from '../config/config';
import { BattleService } from '../services/battle.service';
import { MoneyService } from '../services/money.service';
import { PhaserScene } from './phaser-scene';

export class Summary {
  private _battleService: BattleService;
  private _moneyService: MoneyService;


  constructor(private _scene: PhaserScene) {
    this._battleService = BattleService.getInstance();
    this._moneyService = MoneyService.getInstance();

    this._openDialog();
  }

  private _openDialog(): void {
    const moneyText = this._scene.add.text(0, 0, 'Money: 0', {
      fontSize: '20px',
      fontFamily: 'Orbitron',
    });

    const dialog = this._scene.rexUI.add
      .dialog({
        x: 100,
        y: 100,
        background: this._scene.add.image(10, 0, 'popup_background'),

        title: this._scene.rexUI.add
          .label({
            text: this._scene.add.text(0, 0, 'Summary', {
              fontSize: '20px',
              fontFamily: 'Orbitron',
            }),
            space: {
              left: 15,
              right: 15,
              top: 10,
              bottom: 10,
            },
          })
          .setDraggable(),

        content: moneyText,

        actions: [this._scene.add.image(0, 0, 'btn_deploy').setAlpha(0.5)],

        space: {
          title: 10,
          action: 5,

          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      })
      .layout()
      .pushIntoBounds()
      .popUp(config.dialog.scaleTime);

    dialog
      .on('button.click', function (button: any) {
        // dialog.scaleDownDestroy(config.dialog.scaleTime);
      })
      .on('button.over', function (button: Phaser.GameObjects.Text) {
        button.setAlpha(1);
      })
      .on('button.out', function (button: any) {
        button.setAlpha(0.5);
      });

      console.log(dialog)
  }
}
