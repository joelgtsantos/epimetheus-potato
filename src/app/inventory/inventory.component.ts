import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { InventoryService } from './inventory.service';
import * as fromInventory from './inventory.reducer';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


 constructor(private inventoryService: InventoryService, private store: Store<fromInventory.State>) {}

  ngOnInit(): void {
  }

}
