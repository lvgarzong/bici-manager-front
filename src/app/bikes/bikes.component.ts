import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from './bike.model';
import { BikeService } from './bike.service';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private bikeService: BikeService, private router: Router) { }

  bikeList: Bike[]

  ngOnInit(): void {
    this.bikeService.getAll().subscribe( data => {
      this.bikeList = data
    })
  }

  editBike(id){
    this.router.navigate(['bikes/edit',id])
  }

  newBike(){
    this.router.navigate(['bikes/add'])
  }

  deleteBike(id) {
    console.log(id);
    this.bikeService.delete(id).subscribe (data => {
      console.log(data)
      this.ngOnInit();
      alert('La bicicleta ' + id + ' fue eliminada');
      this.router.navigate(['bikes']);
    })
  }

  showBike(id){
    this.router.navigate(['bikes/show',id])
  }
}
