import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from 'src/app//models/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  @Input() item: Item;

  @Output()
  delete: EventEmitter<Item> = new EventEmitter();
  // now available in parent as (delete), will call a event handler from parent

  @Output()
  update: EventEmitter<Item> = new EventEmitter();
  // now available in parent as (update), will call a event handler from parent

  deleteItem(item: Item) {
    this.delete.emit(item);
  }

  updateItem(item: Item) {
    this.update.emit(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
