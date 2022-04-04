import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http : HttpClient) {}
  private apiUrl = 'http://localhost:5000/user';

  getUser(): Observable<user> {
    return this.http.get<user>(this.apiUrl);
  }


}
