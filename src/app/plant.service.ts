import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PlantService {  

  
  private apiUrl = "https://www.perenual.com/api/species-list?key=sk-F9XZ64ff9bbc686ab2138&";
 
  constructor(private http: HttpClient) { }

  getPlant(commonName : string): Observable<any>{
    const url = `${this.apiUrl}&q=${commonName}`
    return this.http.get<any[]>(this.apiUrl);
  }
  
  addPlant(plantId: number){
    const plantData = (plantId)
    return this.http.post<any>(this.apiUrl, plantData);
  }
  
  deletePlant(plantId: number){
    const url = `${this.apiUrl}/${plantId}`;
    return this.http.delete<any>(url)
  }


}
