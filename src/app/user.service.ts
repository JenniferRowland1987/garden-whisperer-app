import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "https://localhost:7200/api/UserInfo"

  public userID = 0

  constructor(private http: HttpClient){}

  getAllUsers(): Observable<any>
  {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUser(id: number): Observable<any>
  {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  } 

  createUser(user: any)
  {
    return this.http.post<any>(this.apiUrl, user);
  }
}
