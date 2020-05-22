import { Component, OnInit } from '@angular/core';

import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app//models/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];

  // Event handlers
  onAddItem(item: Item) {
    this.dataService
      .createItem(item)
      .subscribe((newItem) => (this.items = this.items.concat(newItem)));
  }

  onDeleteItem(item: Item) {
    this.dataService
      .deleteItem(item)
      .subscribe(
        (_) =>
          (this.items = this.items.filter(
            (notDeletedItem) => notDeletedItem.id !== item.id
          ))
      );
  }

  onUpdateItem(item: Item) {
    this.dataService
      .updateItem(item)
      .subscribe((updatedItem) => (item = updatedItem));
  }

  constructor(private dataService: ItemDataService) {}

  ngOnInit(): void {
    this.dataService.getAllItems().subscribe((items) => {
      this.items = items;
    });
  }
}
