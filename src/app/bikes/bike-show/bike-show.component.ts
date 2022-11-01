import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bike } from '../bike.model';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-show',
  templateUrl: './bike-show.component.html',
  styleUrls: ['./bike-show.component.css'],
})
export class BikeShowComponent implements OnInit {
  bike: Bike;
  constructor(
    private activeRouter: ActivatedRoute,
    private bikeService: BikeService,
    private router: Router
  ) {
    let bikeId = this.activeRouter.snapshot.params.id;
    this.bikeService.get(bikeId).subscribe((data) => {
      this.bike = data;
    });
  }

  ngOnInit(): void {}

  goBack(){
    this.router.navigate(['bikes'])
  }

}
