import { CONSTANTS } from './../constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from '../phone';
import { Email } from '../email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public addEmail(email: Email){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')
      
    }
    return this.http.post(
      CONSTANTS.API+'/email/add', 
      JSON.stringify(email), 
      options);
  }

  public getEmailByEntity_Id(id: number): Observable<any>{
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json'),
      params: new HttpParams()
        .append('id', id)
    }
    return this.http.get(CONSTANTS.API+'/email/getbyid', options);
  }


}
