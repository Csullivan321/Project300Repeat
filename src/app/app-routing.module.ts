import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './User/booking/booking.component';
import { LoginComponent } from './Auth/login/login.component';
import { ManagebookingsComponent } from './Admin/managebookings/managebookings.component';
import { RegisterComponent } from './Auth/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'booking',
    component:BookingComponent
  },
  {
    path: 'managebookings',
    component:ManagebookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);