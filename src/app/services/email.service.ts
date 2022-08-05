import { CONSTANTS } from './../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from '../phone';
import { Email } from '../email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  addEmail(email: Email){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')  
    }
    return this.http.post(CONSTANTS.API+'/email/add', JSON.stringify(email), options);
  }


}
