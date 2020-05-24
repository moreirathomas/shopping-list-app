import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // miscellaneous
  title = 'Shopping List App 📒';
  footerLinks = {
    linkedin: 'https://www.linkedin.com/in/thomas-moreira97/',
    email: 'moreirathomas97@gmail.com',
    repo: 'https://github.com/moreirathomas/shopping-list-app',
  };

  // used to check if logout button needs to be displayed
  currentUser: User;

  // logout : call the logout method from authService and navigate to the login page
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((user) => (this.currentUser = user));
  }
}
