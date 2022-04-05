import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Divace } from '../models/divace';

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
  private apiUrl = 'http://localhost:5000/Divace';

  getDivaces(): Observable<Divace[]> {

    return this.http.get<Divace[]>(this.apiUrl);

  }

  deleteDivace(divace : Divace) : Observable<Divace> {

    const deleteDivaceUrl = `${this.apiUrl}/${divace.id}`

    return this.http.delete<Divace>(deleteDivaceUrl);

  }

  changeStatus(divace:Divace) : Observable<Divace> {

    const url = `${this.apiUrl}/${divace.id}`;
    return this.http.put<Divace>(url, divace, httpOptions);

  }

  addNewDivace(divace:Divace) : Observable<Divace> {

    return this.http.post<Divace>(this.apiUrl,divace,httpOptions)

  }

  


}
