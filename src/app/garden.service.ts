import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

private apiUrl = 'https://localhost:7200/api/Plant';  //fixed the apiUrl and set it for my local host, you will need to change to yours when testing!!

  constructor(private http: HttpClient){}

  getPlants(): Observable<any[]> 
  {
    return this.http.get<any[]>(this.apiUrl);
  }

  //added a method to get a single users garden. 9/18 -jr
  getGarden(userId: number): Observable<any[]>
  {
    const url = `${this.apiUrl}/getgarden/${userId}`;
    return this.http.get<any[]>(url);
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
    
    return this.http.get<any[]>('https://localhost:7200/getnothelthy');
  }



}
