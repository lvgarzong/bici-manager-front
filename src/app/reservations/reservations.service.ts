import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './reservations.model';
import { environment } from 'src/environments/environment';

const baseUrl: string = environment.backend.reservationsURL;
//const baseUrl = '/reservations'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  //Crear Reserva
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  //Eliminar Reserva
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

}
