import { Action } from '@ngrx/store';

import { Item } from './item.model';

export const ADD_ITEM = '[Inventory] Add item';
export const SET_INVENTORY = '[Inventory] Set item';
export const DELETE_ITEM_INVENTORY = '[Inventory] Delete item from inventory';
export const UPDATE_ITEM_INVENTORY = '[Inventory] Update item from inventory';


export class SetInventory implements Action {
  readonly type = SET_INVENTORY;

  constructor(public items: Item[]) {}
}

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public newItem: Item) {}
}

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM_INVENTORY;

  constructor(public id: string) {}
}

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM_INVENTORY;

  constructor(public id: string, public stock: number) {}
}

export type InventoryActions =
  | SetInventory
  | AddItem
  | DeleteItem
  | UpdateItem;
