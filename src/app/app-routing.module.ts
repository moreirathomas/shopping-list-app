import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './helpers';
import { ItemsListComponent, LoginComponent } from './components';

const routes: Routes = [
  { path: '', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // if none of the above, redirect to the homepage
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
