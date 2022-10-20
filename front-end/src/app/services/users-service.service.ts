import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/users"

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllUsers(): Observable<any>{
    return this.httpClient.get(baseUrl)
  }

  public addUser(user:any): Observable<any>{
    return this.httpClient.post(baseUrl, user);
  }

  public deleteUser(id:any): Observable<any>{
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }

  public updateUser(id:any, user:any): Observable<any>{
    return this.httpClient.put(`${baseUrl}/${user.id}`, user);
  }
}
