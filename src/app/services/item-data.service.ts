import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../services';
import { Item } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ItemDataService {
  getAllItems(): Observable<Item[]> {
    return this.apiService.getAllItems();
  }

  createItem(item: Item): Observable<Item> {
    return this.apiService.createItem(item);
  }

  deleteItem(item: Item): Observable<Item> {
    return this.apiService.deleteItem(item);
  }

  updateItem(item: Item): Observable<Item> {
    // change the status of the item before sending the request
    item.done = !item.done;
    return this.apiService.updateItem(item);
  }

  constructor(private apiService: ApiService) {}
}
