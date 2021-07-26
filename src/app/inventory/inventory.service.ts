import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from './item.model';
import { ItemData } from './item-data.model';
import * as Inventory from './inventory.actions';
import * as fromInventory from './inventory.reducer';

@Injectable()
export class InventoryService {

  private itemList: Item[] = [
    {id:"1234", name: "item 1", stock: 100, createdDate:  new Date(), lastUpdatedDate:  new Date() },
    {id:"3456", name: "item 2", stock: 200, createdDate:  new Date(), lastUpdatedDate:  new Date() },
  ]


  constructor(
    private store: Store<fromInventory.State>
  ) {}


  createNewItem(item: ItemData){

    
    let newItem: Item = {
      id: Math.round(Math.random() * 10000).toString(),
      name: item.name,
      stock: item.stock,
      createdDate: new Date(),
      lastUpdatedDate: new Date()
    }

    this.store.dispatch(new Inventory.AddItem(newItem));
  }

  getAllItems(){
    return this.itemList.slice();
  }

}