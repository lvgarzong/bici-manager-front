import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Bike } from '../bike.model';
import { BikeService } from '../bike.service';
import { FormGroup , FormControl , Validators } from '@angular/forms';


@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css']
})

export class BikeEditComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute,
              private router: Router,
              private bikeService: BikeService) {
              }

  bike: Bike
  bikeId: number  

  editarForm = new FormGroup({
    'id': new FormControl(0),
    'marca': new FormControl(''),
    'tipo': new FormControl(''),
    'color': new FormControl(''),
    'estado': new FormControl(''),
    'latitude': new FormControl(0),
    'longitude': new FormControl(0)
  })

  ngOnInit(): void {
    this.bikeId = this.activeRouter.snapshot.params.id
    console.log(this.bikeId)
    this.bikeService.get(this.bikeId).subscribe(data => {
      this.bike = data
      this.editarForm.setValue({
        'id': this.bike.id,
        'marca': this.bike.marca,
        'tipo': this.bike.tipo,
        'color': this.bike.color,
        'estado': this.bike.estado,
        'latitude': this.bike.latitude,
        'longitude': this.bike.longitude
      })
  })

  }

  postForm(form: any){
    this.bikeService.update(this.bikeId,form).subscribe( data => {
      console.log(data)
    });
    this.goBack();
  }

  goBack() {
    this.router.navigate(['bikes'])
  }

}
