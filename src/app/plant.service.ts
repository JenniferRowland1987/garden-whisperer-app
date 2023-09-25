import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant, PlantApiResponse } from './models/plant.model';




@Injectable({
  providedIn: 'root'
})
export class PlantService {  

  
  private apiUrl = "https://www.perenual.com/api/species-list?key=sk-F9XZ64ff9bbc686ab2138&q=";
 
  constructor(private http: HttpClient) { }

  searchPlantsByCommon(searchQuery: string): Observable<PlantApiResponse> {
    const url = `${this.apiUrl}&q=${searchQuery}`;
    return this.http.get<PlantApiResponse>(url);
  }


  getPlantById(id: number): Observable<any> {
    const url = `https://www.perenual.com/api/species/details/${id}?key=sk-F9XZ64ff9bbc686ab2138&q`;
    return this.http.get<PlantApiResponse>(url);
  }

}
