import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { User } from 'src/app//models/user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = new User();

  returnUrl: string;
  error = '';

  onSubmit() {
    // simple if statement for conviniency... ~ would use html form validation
    if (this.user.username && this.user.password) {
      this.authService
        .login(this.user.username, this.user.password)
        // .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate([this.returnUrl]);
          },
          (error) => (this.error = error)
        );
    } else {
      window.alert(
        'Invalid credentials ⛔️\nYou can find them below the form 👇'
      );
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
