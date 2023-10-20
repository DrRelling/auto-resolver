declare const WinBox: any;
import { RegionData, world } from '../data/world';
import { config } from '../config/config';
import { Region } from '../enums/region.enum';

export class Battle {
  private _region: RegionData;
  private _window: typeof WinBox | null = null;

  constructor(regionKey: Region) {
    this._region = world[regionKey];
    const scene = (window as any).scene;
    const [x1, y1, x2, y2] = this._region.bounds;
    const targetColour = this._region.colour;
    let threatX = 0;
    let threatY = 0;

    for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * (x2 - x1)) + x1;
      const y = Math.floor(Math.random() * (y2 - y1)) + y1;
      const rgba = scene.textures.getPixel(x, y, 'worldmap')?.rgba;
      if (targetColour === rgba) {
        threatX = x;
        threatY = y;
        break;
      }
    }

    scene.add
      .image(threatX, threatY, 'red-dot')
      .setInteractive()
      .addListener('pointerup', () => {
        if (this._window == null) {
          const line = scene.add
            .line(0, 0, threatX, threatY, 100, 100, 0xffffff)
            .setOrigin(0, 0);
          this._window = new WinBox(this._region.label, {
            mount: document.getElementById('battle_' + regionKey),
            x: threatX - config.winbox.width / 2,
            y: threatY - config.winbox.height / 2,
            width: config.winbox.width,
            height: config.winbox.height,
            onmove: function (x: number, y: number) {
              line.setTo(
                threatX,
                threatY,
                x + this.width / 2,
                y + this.height / 2
              );
            },
            onresize: function (x: number, y: number) {
              line.setTo(
                threatX,
                threatY,
                x + this.width / 2,
                y + this.height / 2
              );
            },
            onclose: () => {
              line.destroy();
              this._window = null;
            },
          });
        }
      });
  }
}
