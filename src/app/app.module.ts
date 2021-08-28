import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { BookingComponent } from './User/booking/booking.component';
import { RoomComponent } from './User/room/room.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagebookingsComponent } from './Admin/managebookings/managebookings.component';
import { BookComponent } from './Admin/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookingComponent,
    RoomComponent,
    ManagebookingsComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
