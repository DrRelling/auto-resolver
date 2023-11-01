import { ConsoleManager, PageBuilder } from 'console-gui-tools';
import { Removable } from '../classes/removable';

export abstract class Page {
  public id = 'id';
  protected _components: Removable[] = [];
  protected _page = new PageBuilder();

  constructor(
    protected _title: string,
    protected _pageIdx: number,
    protected _gui: ConsoleManager
  ) {}

  protected makeActive(): void {
    this._gui.setPage(this._page, this._pageIdx, this._title);
  }

  public makeInactive(): void {
    this._components.forEach((c) => c.remove());
    this._components = [];
  }
}
