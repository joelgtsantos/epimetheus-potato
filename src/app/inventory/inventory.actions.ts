import { Action } from '@ngrx/store';

import { Item } from './item.model';

export const ADD_ITEM = '[Inventory] Add item';

export const SET_INVENTORY = '[Inventory] Set item';


export class SetInventory implements Action {
  readonly type = SET_INVENTORY;

  constructor(public items: Item[]) {}
}


export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public newItem: Item) {}
}

export type InventoryActions =
  | SetInventory
  | AddItem;
