import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Bike } from '../bike.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-add',
  templateUrl: './bike-add.component.html',
  styleUrls: ['./bike-add.component.css'],
})
export class BikeAddComponent implements OnInit {
  bike: Bike = {
    id: 0,
    marca: '',
    tipo: '',
    color: '',
    estado: 'Disponible',
    latitude: 0,
    longitude: 0
  };

  constructor(private bikeService: BikeService, private router: Router) {}

  ngOnInit(): void {}

  createBike(): void {
    const data = {
      id: this.bike.id,
      marca: this.bike.marca,
      tipo: this.bike.tipo,
      color: this.bike.color,
      estado: this.bike.estado,
      latitude: this.bike.latitude,
      longitude: this.bike.longitude
    };

    this.bikeService.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.goBack();
  }

  goBack() {
    this.router.navigate(['bikes'])
  }
}
