import { Component, OnInit } from '@angular/core';

import { ItemDataService } from 'src/app/services/item-data.service';
import { AuthService } from '../../services/auth.service';

import { Item, User } from '../../models';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  currentUser: User;
  // Event handlers

  // every events are handled here, in the top component
  // they could be handled in their respective one
  // ~ onAddItem inside add-item.component.ts
  // ~ onDeleteItem & onUpdateItem inside edit-item.component.ts

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

  constructor(
    private dataService: ItemDataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.authService.currentUser.subscribe((user) => (this.currentUser = user));
    this.currentUser = this.authService.currentUserValue;
    this.dataService.getAllItems().subscribe((items) => {
      this.items = items;
    });
  }
}
