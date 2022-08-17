import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../address';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }


  public createAddress(address: Address){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')  
    }
    return this.http.post(CONSTANTS.API+'/address/add', 
    JSON.stringify(address), 
    options);
  }

  public getAllAddressByEntity_Id(id: number): Observable<any>{
    let token = localStorage.getItem('token');
      const options = {
        headers: new HttpHeaders()
          .append('Authorization', 'Bearer ' + token)
          .append('content-type', 'application/json'),
        params: new HttpParams()
          .append('id', id)
      }
      return this.http.get(CONSTANTS.API+'/address/getbyid', options);
      
  }

  public replaceAddress(address: Address, recordId: number){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json'),
      params: new HttpParams()
        .append('recordId', recordId)
    }
    return this.http.post(
      CONSTANTS.API+'/address/replace',
      JSON.stringify(address),
      options);
  }

  public inactiveAddress(recordId: number){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json'),
      
    }
    return this.http.post(CONSTANTS.API+'/address/inactive', JSON.stringify(recordId), options);
  }
  


}
