import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { InventoryActions, ADD_ITEM, SET_INVENTORY } from './inventory.actions';
import { Item } from './item.model';
import * as fromRoot from '../app.reducer';

export interface InventoryState {
  items: Item[];
}

export interface State extends fromRoot.State {
  inventory: InventoryState;
}

const initialState: InventoryState = {
  items: []
}

export function inventoryReducer(state: InventoryState = initialState, action: InventoryActions){
  console.log("action"+action.type);
   switch (action.type){
    case SET_INVENTORY:
      return {
        ...state,
        items: action.items
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.newItem]
      };
    default:{
      return state;
    }
  }
}

export const getInventoryState = createFeatureSelector<InventoryState>('inventory');
export const getAllItems = createSelector(getInventoryState, (state: InventoryState) => state.items);
