import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

//private apiKey = '5d4156603a6547da9d6230956232109';
private apiUrl = 'http://api.weatherapi.com/v1/current.json?key=5d4156603a6547da9d6230956232109&q=';
//private location = '';

constructor(private http: HttpClient) { }

getWeather(city: string): Observable<any> {
  const url = `${this.apiUrl}${city}`;
  return this.http.get<any>(url);
}









}
