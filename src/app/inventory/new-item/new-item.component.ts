import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    this.itemService.createNewItem({
      name: form.value.name,
      stock: form.value.stock
    })
  }

}
