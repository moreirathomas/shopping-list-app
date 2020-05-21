import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { ItemDataService } from './services/item-data.service';

import { ItemComponent } from './item/item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsListComponent,
    EditItemComponent,
    AddItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiService, ItemDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
