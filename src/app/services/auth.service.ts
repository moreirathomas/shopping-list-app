import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
// login & logout of the app, notifies other components when the user logs in/out, allows access the currentUser
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private apiUrl = environment.apiUrl;
  private endpoint = '/users/authenticate';

  // currentUserValue allows other components to get the value of the currentUser without having to subscribe to it
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const payload = { username, password };
    return this.http.post<any>(this.apiUrl + this.endpoint, payload).pipe(
      map((user) => {
        // store currentUser in localstorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        // notify the subscribers that there is a new user
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    // remove currentUser from localstorage
    localStorage.removeItem('currentUser');
    // notify the subscribers that there is a no longer a  user
    this.currentUserSubject.next(null);
  }

  constructor(private http: HttpClient) {
    // init where the current user will be observed from (localstorage)
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    // observe the current user from localstorage
    this.currentUser = this.currentUserSubject.asObservable();
  }
}
