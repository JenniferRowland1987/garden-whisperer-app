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

  //added a method to pull a plant by id from the perenual api
  getPlantById(id: number): Observable<any> {
    const url = `https://www.perenual.com/api/species/details/${id}?key=sk-F9XZ64ff9bbc686ab2138`;
    return this.http.get<any>(url);
  }
  
  //this service deals with an external api, I don't think we have the authority to add or delete from their database.
  /*addPlant(plantId: number){
    const plantData = (plantId)
    return this.http.post<any>(this.apiUrl, plantData);
  }
  
  deletePlant(plantId: number){
    const url = `${this.apiUrl}/${plantId}`;
    return this.http.delete<any>(url)
  }*/

}
