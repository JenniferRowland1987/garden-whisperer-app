import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "https://localhost:7200/api/UserInfo" 

  public userID = 2;

  constructor(private http: HttpClient){}

  getAllUsers(): Observable<any>
  {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserID(){
    return this.userID;
  }
   
  setUserID(id: number){
    this.userID = id;
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

  checkUserNameIsTaken(userName: string): Observable<boolean>{
    const url =`${this.apiUrl}/IsUserNameAvailable/${userName}`;
    return this.http.get<boolean>(url);
  }

  updateUser(id: number, user: any): Observable<any>
  {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, user);
  }



}
