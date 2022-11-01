import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeAddComponent } from './bikes/bike-add/bike-add.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { BikeShowComponent } from './bikes/bike-show/bike-show.component';
import { BikesComponent } from './bikes/bikes.component';
import { HomeComponent } from './home/home.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'reservations', component: ReservationsComponent},
  { path: 'reservations/add', component: AddReservationComponent},
  { path: 'bikes/show/:id', component: BikeShowComponent },
  { path: 'bikes/edit/:id', component: BikeEditComponent },
  { path: 'bikes/add', component: BikeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
