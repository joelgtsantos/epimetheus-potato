import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { Item } from '../item.model';
import { InventoryService } from '../inventory.service';
import * as fromInventory from '../inventory.reducer';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'stock', 'createdDate', 'lastUpdatedDate', 'customActions'];
  dataSource = new MatTableDataSource<Item>();


  constructor(
    private inventoryService: InventoryService,
    private store: Store<fromInventory.State>
    ) { }

  ngOnInit(): void {
    this.store.select(fromInventory.getAllItems).subscribe(
      (items: Item[]) => {
        console.log("Add new item to inventory");
        this.dataSource.data = items;
      }
    );
  }

  deleteItem(id: string): void {
    console.log("delete item "+id)
    this.inventoryService.deleteItem(id);
  }

  saveItem(id: string, stock: number): void {
    console.log("update item "+id + " " + stock)
    this.inventoryService.updateItem(id, stock);
  }

}
