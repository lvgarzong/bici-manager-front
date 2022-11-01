import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from './bike.model';
import { environment } from 'src/environments/environment';

const baseUrl: string = environment.backend.bikesURL;
//const baseUrl = '/bikes';


@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) { }


  getAll(): Observable<Bike[]> {
    return this.http.get<Bike[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
