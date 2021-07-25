import { Item } from './item.model';
import { ItemData } from './item-data.model';

export class ItemService {

  createNewItem(item: ItemData){

    
    let newItem: Item = {
      id: Math.round(Math.random() * 10000).toString(),
      name: item.name,
      stock: item.stock,
      createdDate: new Date(),
      lastUpdatedDate: new Date()
    }

    console.log(newItem);
  }

}