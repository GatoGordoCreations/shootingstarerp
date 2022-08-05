import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.post(CONSTANTS.API+'/address/add', JSON.stringify(address), options);
  }


}
