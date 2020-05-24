import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Item } from '../../models';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  newItem: Item = new Item();

  @Output()
  add: EventEmitter<Item> = new EventEmitter();
  // now available in parent as (add), will call a event handler from parent

  addItem() {
    this.add.emit(this.newItem);
    this.newItem = new Item();
  }

  constructor() {}

  ngOnInit(): void {}
}
