import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor } from './helpers';
import {
  ApiService,
  AuthService,
  ItemDataService,
  UserDataService,
} from './services';
import {
  ItemComponent,
  ItemsListComponent,
  EditItemComponent,
  AddItemComponent,
  LoginComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsListComponent,
    EditItemComponent,
    AddItemComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    ApiService,
    ItemDataService,
    UserDataService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
