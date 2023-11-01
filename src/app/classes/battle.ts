import Dialog from 'phaser3-rex-plugins/templates/ui/dialog/Dialog';
import { config } from '../config/config';
import { RegionData, world } from '../data/world';
import { Region } from '../enums/region.enum';
import { PhaserScene } from './phaser-scene';
import { GridSizerPlus } from '../utils/grid-sizer-plus';

export class Battle {
  private _region: RegionData;
  private _threatImg?: Phaser.GameObjects.Image;
  private _threatX: number = 0;
  private _threatY: number = 0;

  private _updateListener?: Phaser.Events.EventEmitter;

  constructor(
    regionKey: Region,
    private _scene: PhaserScene
  ) {
    this._region = world[regionKey];

    this._createThreatPing();
  }

  public destroy(): void {
    this._threatImg?.destroy();
  }

  private _createThreatPing(): void {
    const [x1, y1, x2, y2] = this._region.bounds;
    const targetColour = this._region.colour;

    for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * (x2 - x1)) + x1;
      const y = Math.floor(Math.random() * (y2 - y1)) + y1;
      const rgba = this._scene.textures.getPixel(x, y, 'worldmap')?.rgba;
      if (targetColour === rgba) {
        this._threatX = x;
        this._threatY = y;
        break;
      }
    }

    this._threatImg = this.addThreat(
      this._region.label,
      this._threatX,
      this._threatY
    );
  }

  public addThreat(
    regionName: string,
    x: number,
    y: number
  ): Phaser.GameObjects.Image {
    let dialog: Dialog;
    const img = this._scene.add
      .image(x, y, 'red-dot')
      .setInteractive()
      .addListener('pointerup', () => {
        dialog = this.openDialog(regionName, x, y);
      });
    return img;
  }

  public openDialog(regionName: string, x: number, y: number): Dialog {
    const line = this._scene.add
      .line(0, 0, x, y, x, y, 0xffffff)
      .setOrigin(0, 0);

    const moneyText = this._scene.add.text(0, 0, 'Money: 0', {
      fontSize: '20px',
      fontFamily: 'Orbitron',
    });

    const dialog = this._scene.rexUI.add
      .dialog({
        x,
        y,
        background: this._scene.add.image(10, 0, 'popup_background'),

        title: this._scene.rexUI.add
          .label({
            text: this._scene.add.text(0, 0, regionName, {
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

        content: this.s(),

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

    const update = () => this._updateDialogLines(dialog, line);

    dialog
      .on('button.click', function (button: any) {
        dialog.scaleDownDestroy(config.dialog.scaleTime);
      })
      .on('button.over', function (button: Phaser.GameObjects.Text) {
        button.setAlpha(1);
      })
      .on('button.out', function (button: any) {
        button.setAlpha(0.5);
      })
      .on('scaledown.complete', () => {
        this._updateListener?.removeListener(
          Phaser.Input.Events.UPDATE,
          update
        );
        line.destroy();
      });

    this._updateListener = this._scene.events.addListener(
      Phaser.Input.Events.UPDATE,
      update
    );

    return dialog;
  }

  private _updateDialogLines(
    dialog: Dialog,
    line: Phaser.GameObjects.Line
  ): void {
    const scaleX = this._scene.scale.displayScale.x;
    const scaleY = this._scene.scale.displayScale.y;

    const x = dialog.centerX * scaleX;
    const y = dialog.centerY * scaleY;
    line.setTo(this._threatX, this._threatY, x, y);
  }

 

  private s(): any {
    var sizer = this._scene.rexUI.add.gridSizer({
      x: 400,
      y: 300,
      width: 400,
      height: 400,
      column: 6,
      row: 6,
      columnProportions: 1,
      rowProportions: 1,
      space: {
        column: 5,
        row: 5,
      },
    }) as GridSizerPlus;

    for (var i = 0; i < sizer.rowCount; i++) {
      for (var j = 0; j < sizer.columnCount; j++) {
        sizer.add(
          this._scene.rexUI.add.label({
            background: this._scene.rexUI.add.roundRectangle(
              0,
              0,
              0,
              0,
              14,
              0x4e342e
            ),
            text: this._scene.add.text(0, 0, `${i},${j}`),
            space: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
            align: 'center',
          }), // child
          i, // columnIndex
          j, // rowIndex
          'center', // align
          0, // paddingConfig
          true // expand
        );
      }
    }
    sizer.layout();

    sizer
      .setChildrenInteractive()
      .on('child.click', function (child: any) {
        var gridIndex = (sizer as any).childToGridIndex(child);
        console.log(`click ${gridIndex.x},${gridIndex.y}\n`);
      });

    return sizer;
  }
}
