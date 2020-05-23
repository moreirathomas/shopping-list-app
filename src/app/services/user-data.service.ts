import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private apiUrl = environment.apiUrl;
  private endpoint = '/users';

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + this.endpoint).pipe(
      map((res) => {
        return res.map((user) => new User(user));
      }),
      catchError((err) => throwError(err))
    );
  }

  constructor(private http: HttpClient) {}
}

// to refactor so that it uses ApiService
// => refactor ApiService so that it can be passed endpoint as a param and the methods in ApiService can handle diffent Observables
// (not only <Item> but <Item> || <User>)
// to change : api.service.ts to receive variables endpoints + Observables and user-data.service.ts + item-data.service.ts to emit variables endpoints + Observables

// NOT REALLY NEEDED AS THERE IS NOTHING FROM USER TO DISPLAY...
