import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInventory from './inventory/inventory.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
   inventory: fromInventory.inventoryReducer
};