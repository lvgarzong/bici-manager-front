import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bikes/bike.model';
import { BikeService } from '../bikes/bike.service';
import { Reservation } from './reservations.model';
import { ReservationService } from './reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})

export class ReservationsComponent implements OnInit {
  constructor(
    private router: Router,
    private bikeService: BikeService,
    private reservationService: ReservationService
  ) {}

  user_id: String
  bikeList: Bike[];
  reservationList: Reservation[];
  bike: Bike;
  newId: number;
  finished_loading: boolean = false;

  ngOnInit(): void {
    this.bikeService.getAll().subscribe((data1) => {
      this.bikeList = data1;
      this.reservationService.getAll().subscribe(data2 => {
        this.reservationList = data2;
        for (let res of this.reservationList) {
          let index = this.bikeList.findIndex((obj => obj.id === res.idBike));
        }
        this.finished_loading = true;
      })
    });

    this.user_id = 'user' + Math.random;
    
  }

  handleEvent(id: Number, state: String, lat: Number, lon: Number) {
    if (state === 'disponible') {
      this.newReservation(id, lat, lon);
    }
    else if (state === 'reservada') {
      this.deleteReservation(id);
    }
  }

  newReservation(id: Number, lat: Number, lon: Number) {
    this.reservationService.getAll().subscribe( data => {
      this.reservationList = data
      return this.reservationList
    })

    const max = Math.max.apply(Math, this.reservationList.map(function(o) {return o.id}))

    const data = {
      id: max + 1,
      idUser: this.user_id,
      idBike: id,
      latitude: lat,
      longitude: lon,
    };

    // Create Reservation
    this.reservationService.create(data).subscribe(
      (response) => {
        console.log(response)
      },(error) => {
        console.log(error)
        alert(error);
      }
    )

    alert('La bicicleta ' + id + ' está ahora reservada.');
    this.finished_loading = false;
    this.ngOnInit();
  }

  deleteReservation(id){
    this.reservationService.getAll().subscribe( data => {
      this.reservationList = data
      return this.reservationList
    })

    const bici = this.reservationList.find( dato => dato.idBike === id );
    const idDelete = bici.id;
    this.reservationService.delete(idDelete).subscribe( data => {
      console.log(data)
      alert('La bicicleta ' + id + ' ahora se encuentra disponible.');
      this.finished_loading = false;
      this.ngOnInit();
    })
  }

  goBack() {
    this.router.navigate(['reservations']);
  }
}
