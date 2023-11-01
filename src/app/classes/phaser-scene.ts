import { config } from '../config/config';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import { Summary } from './summary';

export class PhaserScene extends Phaser.Scene {
  public rexUI!: RexUIPlugin;
  private worldMap?: Phaser.GameObjects.Image;
  private _summary?: Summary;

  constructor() {
    super({ key: 'main' });
    (window as any).scene = this;
  }

  preload() {
    this.load.image('worldmap', 'assets/continents.jpg'); //'assets/world-map.jpg');
    this.load.image('red-dot', 'assets/red-dot.png');
    this.load.image('popup_background', 'assets/popup_background.png');
    this.load.image('btn', 'assets/btn.png');
    this.load.image('btn_deploy', 'assets/buttons/btn_deploy.png');
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI'
  });
  }

  create() {
    setTimeout(() => this._summary = new Summary(this), 0);
    const midX = config.screen.width / 2;
    const midY = config.screen.height / 2;
    this.worldMap = this.add.image(midX, midY, 'worldmap');

    // this.addShine();
    // this.flashMap();

    // this.input.on('pointerdown', (pointer: { x: number; y: number }) => {
    //   console.log(pointer.x, pointer.y);
    //   console.log(this.textures.getPixel(pointer.x, pointer.y, 'worldmap'));
    // });

    this.add
      .text(midX, midY, 'Scanning...')
      .setFontFamily('Orbitron')
      .setFontSize(64)
      .setColor('#ffff00')
      .setAlign('Center');
  }
  
  private addShine(): void {
    this.worldMap?.postFX.addShine(0.5, 0.2, 15);
  }

  private removeShine(): void {
    this.worldMap?.clearFX();
  }

  private flashMap(): void {
    this.tweens.addCounter({
      from: parseInt('0xffffff'),
      to: parseInt('0xff0000'),
      duration: 500,
      loop: 4,
      yoyo: true,
      onUpdate: (tween) => {
        const value = Math.floor(tween.getValue());
        this.worldMap?.setTint(value);
      },
    });
  }
}
