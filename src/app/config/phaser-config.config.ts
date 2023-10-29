import { PhaserScene } from '../classes/phaser-scene';
import { config } from './config';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

export const phaserConfig = {
  type: Phaser.AUTO,
  scene: [PhaserScene],
  scale: {
    parent: 'phaser_container',
    mode: Phaser.Scale.NONE, //Phaser.Scale.FIT,
    height: config.screen.height,
    width: config.screen.width,
  },
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: UIPlugin,
        mapping: 'rexUI',
      },
    ],
  },
};
