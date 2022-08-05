import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) { }



  getVal(id: number) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token),
      params: new HttpParams()
        .append('id', id),
      responseType: 'text' as 'json'
        
    };
    
    return this.http.get<string>(CONSTANTS.API+'/entity/val', options);
  }
}

