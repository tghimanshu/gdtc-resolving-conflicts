import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';

/**
 * Defines the routes for the application.
 */
const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

/**
 * Module responsible for handling application routing.
 * Configures the router module with the defined routes.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
