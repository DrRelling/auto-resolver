declare const WinBox: any;
import { world } from '../data/world';
import { config } from '../config/config';

export class Threat {
  private _x = 0;
  private _y = 0;
  private _region = '';
  private _line: Phaser.GameObjects.Line | null = null;
  private window: typeof WinBox | null = null;

  constructor(scene: Phaser.Scene, regionKey: string) {
    const region = world.regions[regionKey];
    const [x1, y1, x2, y2] = region.bounds;
    const targetColour = region.colour;
    let threatX = 0;
    let threatY = 0;

    for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * (x2 - x1)) + x1;
      const y = Math.floor(Math.random() * (y2 - y1)) + y1;
      const rgba = scene.textures.getPixel(x, y, 'worldmap')?.rgba;
      console.log(rgba, targetColour)
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
        const line = scene.add
          .line(0, 0, threatX, threatY, 100, 100, 0xffffff)
          .setOrigin(0, 0);
        const box = new WinBox('Basic Window', {
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
          onclose: () => line.destroy(),
        });
      });
  }
}
