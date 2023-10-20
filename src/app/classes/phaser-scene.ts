import { config } from '../config/config';

export class PhaserScene extends Phaser.Scene {
  private worldMap?: Phaser.GameObjects.Image;

  constructor() {
    super({ key: 'main' });
    (window as any).scene = this;
  }

  preload() {
    this.load.image('worldmap', 'assets/continents.jpg');
    this.load.image('red-dot', 'assets/red-dot.png');
  }

  create() {
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

  override update() {
    // tween
    // if (this.tintValue < 0xff0000 || this.tintValue > 0xffeeee) {
    //   this.tintDirection = -this.tintDirection;
    // }
    // this.tintValue += this.tintDirection;
    // console.log(this.tintValue, this.tintDirection);
    // this.worldMap?.setTint(this.tintValue);
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
