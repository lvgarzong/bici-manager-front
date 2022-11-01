import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const user_id = params['params']['uid'];
      if (user_id) {
        console.log("I'm in");
      }
    });
  }

  ngOnInit(): void {
    this.router.navigate(['/']);
  }

}
