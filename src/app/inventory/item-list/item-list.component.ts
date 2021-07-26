import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { Item } from '../item.model';
import { InventoryService } from '../inventory.service';
import * as fromInventory from '../inventory.reducer';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'stock', 'lastUpdatedDate'];
  dataSource = new MatTableDataSource<Item>();


  constructor(
    private inventoryService: InventoryService,
    private store: Store<fromInventory.State>
    ) { }

  ngOnInit(): void {
    this.store.select(fromInventory.getAllItems).subscribe(
      (items: Item[]) => {
        console.log("itemmssss");
        this.dataSource.data = items;
      }
    );
    //this.trainingService.fetchCompletedOrCancelledExercises();
  }

}
