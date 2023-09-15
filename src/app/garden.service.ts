import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

private apiUrl = '';

  constructor(private http: HttpClient) { }

  getPlants(): Observable<any[]> 
  {
    return this.http.get<any[]>(this.apiUrl);
  }





}
