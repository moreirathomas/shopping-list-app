import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Item } from 'src/app/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemDataService {
  getAllItems(): Observable<Item[]> {
    return this.api.getAllItems();
  }

  createItem(item: Item): Observable<Item> {
    return this.api.createItem(item);
  }

  deleteItem(item: Item): Observable<Item> {
    return this.api.deleteItem(item);
  }

  updateItem(item: Item): Observable<Item> {
    // change the status of the item before sending the request
    item.done = !item.done;
    return this.api.updateItem(item);
  }

  constructor(private api: ApiService) {}
}
