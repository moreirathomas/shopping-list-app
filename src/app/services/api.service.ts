import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Item } from 'src/app/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private endpoint = '/api/items';

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + this.endpoint).pipe(
      map((res) => {
        return res.map((item) => new Item(item));
      }),
      catchError((err) => throwError(err))
    );
  }

  public createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl + this.endpoint, item).pipe(
      map((res) => {
        return new Item(res);
      }),
      catchError((err) => throwError(err))
    );
  }

  public deleteItem(item: Item): Observable<null> {
    return this.http
      .delete<null>(this.apiUrl + this.endpoint + `/${item._id}`)
      .pipe(
        map((res) => null),
        catchError((err) => throwError(err))
      );
  }

  public updateItem(item: Item): Observable<Item> {
    return this.http
      .patch<Item>(this.apiUrl + this.endpoint + `/${item._id}`, item)
      .pipe(
        map((res) => {
          return new Item(res);
        }),
        catchError((err) => throwError(err))
      );
  }

  constructor(private http: HttpClient) {}
}
