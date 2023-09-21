import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PlantService {  

  
  private apiUrl = "https://www.perenual.com/api/species-list?key=sk-F9XZ64ff9bbc686ab2138&q=";
 
  constructor(private http: HttpClient) { }

  searchPlantsByCommon(commonName : string): Observable<any[]>{
    const url = `${this.apiUrl}${commonName}`
    return this.http.get<any[]>(this.apiUrl);
  }

 
  getPlantById(id: number): Observable<any> {
    const url = `https://www.perenual.com/api/species/details/${id}?key=sk-F9XZ64ff9bbc686ab2138`;
    return this.http.get<any>(url);
  }

}
