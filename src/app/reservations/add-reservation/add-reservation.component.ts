import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../reservations.model';
import { ReservationService } from '../reservations.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})

export class AddReservationComponent implements OnInit {
  reservation: Reservation = {
      id:0,
      idUser: '',
      idBike:0,
      latitud: 0,
      longitud:0
  }
  submitted = false
  constructor(private router: Router,
              private reservationService: ReservationService) { }

  user_id: String

  ngOnInit(): void {
      this.user_id = 'User' + Math.random;
  }

  createReservation(){
    const data = {
      id: this.reservation.id,
      idUser: this.user_id,
      idBike: this.reservation.idBike,
      latitud: this.reservation.latitud,
      longitud: this.reservation.longitud
    }

    this.reservationService.create(data).subscribe(
      (response) => {
        console.log(response)
        // alert('Bicicleta reservada correctamente');
        this.submitted = true
      },(error) => {
        console.log(error)
        alert(error)
      }
    )
  }

  newReservation(): void {
    this.submitted = false
    this.reservation = {
      id:0,
      idUser: '',
      idBike:0,
      latitud: 0,
      longitud:0
    }
  }

  goBack(){
    this.router.navigate(['reservations'])
 }
}
