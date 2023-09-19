import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

private apiUrl = 'https://localhost:7199/api/garden-whisperer-app';

  

  getPlants(): Observable<any[]> 
  {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPlant(id: number): Observable<any> {
    console.log(id)
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addPlant(plant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, plant);
  }

  updatePlant(id: number, plant: any): Observable<any> {
    console.log(plant)
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, plant);
  }

  labelNotHealthy(notHealthy: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, notHealthy);
  }

  labelHealthy(healthy: any): Observable<any> {
    const url = `${this.apiUrl}/${!healthy}`;
    return this.http.post<any>(url, healthy);
  }

  getNotHealthy(): Observable<any[]> {
    
    return this.http.get<any[]>('https://localhost:7199/getnothelthy');
  }



}
