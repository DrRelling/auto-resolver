import GridSizer from 'phaser3-rex-plugins/templates/ui/gridsizer/GridSizer';

export type GridSizerPlus = GridSizer & {
  setChildrenInteractive: () => GridSizerPlus;
  childToGridIndex: (child: Phaser.GameObjects.GameObject | null) => {
    x: number;
    y: number;
  };
};
