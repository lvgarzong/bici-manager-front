import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { BikeShowComponent } from './bikes/bike-show/bike-show.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BikeAddComponent } from './bikes/bike-add/bike-add.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { BikeService } from './bikes/bike.service';
import { ReservationService } from './reservations/reservations.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikesComponent,
    ReservationsComponent,
    BikeAddComponent,
    BikeShowComponent,
    BikeEditComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BikeService,
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
