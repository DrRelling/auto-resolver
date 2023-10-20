import { PhaserScene } from '../classes/phaser-scene';
import { config } from './config';

export const phaserConfig = {
  type: Phaser.AUTO,
  scene: [PhaserScene],
  scale: {
    parent: 'phaser_container',
    mode: Phaser.Scale.NONE,
    height: config.screen.height,
    width: config.screen.width,
  },
};
