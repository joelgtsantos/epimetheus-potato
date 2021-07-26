import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InventoryService } from '../inventory.service';
import * as fromRoot from '../../app.reducer';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(
    private inventoryService: InventoryService,
    private store: Store<fromRoot.State>  
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    this.inventoryService.createNewItem({
      name: form.value.name,
      stock: form.value.stock
    })
  }

}
