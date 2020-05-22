import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Shopping List App 📒';
  links = {
    email: 'moreirathomas97@gmail.com',
    repo: 'https://github.com/moreirathomas/shopping-list-app',
  };
}
