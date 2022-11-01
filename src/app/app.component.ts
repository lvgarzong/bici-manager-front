import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bici-manager-front';
  constructor(private router: Router) {}

    ngOnInit(): void {
    }

    logout() {
    alert("Ha cerrado sesión");
    this.router.navigate(['/']);
    }
}
