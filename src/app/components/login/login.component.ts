import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = new User();

  returnUrl: string;
  error: string;

  // showing/hidding the db connect hints
  showMore = false;

  onLogin() {
    // simple if statement for conviniency... ~ would use html form validation
    if (this.user.username && this.user.password) {
      this.authService
        .login(this.user.username, this.user.password)
        // .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate([this.returnUrl]);
          },
          (error) => (this.error = error.error.message)
        );
    } else {
      this.error = 'Enter username and password';
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // redirect to homepage if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    // get return url from route params or default to '/'
    // handle the redirection system created in app-routing.module.ts
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
