import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../constants';
import { Phone } from '../phone';
import { PhoneTypes } from '../PhoneTypes';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  addPhone(phone: Phone) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')
      
    }
    return this.http.post(CONSTANTS.API+'/phone/add', JSON.stringify(phone), options);
  }

  replacePhone(phone: Phone, recordId: number) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json'),
      params: new HttpParams()
        .append('recordId', recordId)
    }
    return this.http.post(CONSTANTS.API+'/phone/replace', JSON.stringify(phone), options);
  }

  inactivePhone(recordId: number) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json'),
      
    }
    return this.http.post(CONSTANTS.API+'/phone/inactive', JSON.stringify(recordId), options);
  }

  getPhoneList(id: number): Observable<any> {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json'),
      params: new HttpParams()
        .append('id', id)
    }
    return this.http.get(CONSTANTS.API+'/phone/getbyid', options);
  }

  getPhoneType(id: number): Observable<any> {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token),
        
      params: new HttpParams()
        .append('id', id),
      responseType: 'text' as 'json'
    }
    return this.http.get(CONSTANTS.API+'/phone/get/type', options);
  }


  getAllPhoneTypes(){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token),
    }
    return this.http.get(CONSTANTS.API+'/phonetypes/getall', options);
  }
}
