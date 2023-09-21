import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

private apiKey = 'f1adff9ed20b4f4ba6603413232109';
private apiUrl = 'http://api.weatherapi.com/v1/current.json';
private location = '';

constructor(private http: HttpClient) { }

getWeather() {
  const url = '${this.apiUrl}?key=${this.apiKey}&q=${this.location}';
return this.http.get(url);
}






}
