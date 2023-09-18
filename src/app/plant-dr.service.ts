import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantDrService {

  private apiUrl = "https://www.perenual.com/api/pest-disease-list?key=sk-F9XZ64ff9bbc686ab2138&q=";

  constructor(private http: HttpClient) { }

  getPests(commonName: string): Observable<any[]>
  {
    const url = `${this.apiUrl}${commonName}`;
    return this.http.get<any[]>(url);    
  }
}
