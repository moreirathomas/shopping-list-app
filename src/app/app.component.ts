import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
// import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // misc
  title = 'Shopping List App 📒';
  links = {
    email: 'moreirathomas97@gmail.com',
    repo: 'https://github.com/moreirathomas/shopping-list-app',
  };

  // currentUser: User;

  // logout : call the logout method from authService and navigate to the login page
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  constructor(private router: Router, private authService: AuthService) {}
}
