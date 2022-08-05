import { CONSTANTS } from './../constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(id: number) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token),
        //.append('content-type', 'application/json'),
      params: new HttpParams()
        .append('id', id),
      
    }
    return this.http.get<Person>(
      CONSTANTS.API+'/person/get', 
      options);
  }

  getPersonSubType(id: number) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token),
      params: new HttpParams()
        .append('id', id),
        responseType: 'text' as 'json'
      
    };
    return this.http.get<string>(CONSTANTS.API+'/person/get/subtype', options);
  }
}
