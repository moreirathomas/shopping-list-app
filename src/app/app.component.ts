import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // misc
  title = 'Shopping List App 📒';
  links = {
    email: 'moreirathomas97@gmail.com',
    repo: 'https://github.com/moreirathomas/shopping-list-app',
  };

  path: string;

  // logout : call the logout method from authService and navigate to the login page
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.path = this.location.path();
    console.log(this.path);
  }
}
