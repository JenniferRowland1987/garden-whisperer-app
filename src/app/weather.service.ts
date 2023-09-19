import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

private apiUrl = 'http://api.airvisual.com/v2/nearest_city?key=eb16f705-fc63-4409-bda6-6da23b2ec82d';

constructor(private http: HttpClient) { }

getWeather(): Observable<any[]> 
  {
    return this.http.get<any[]>(this.apiUrl);
  }





}
