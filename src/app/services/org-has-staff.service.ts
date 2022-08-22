import { OrgHasStaff } from './../orghasstaff';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OrgHasStaffService {

  constructor(
    private http: HttpClient,

  ) { }

  public addRelationship(relationship: OrgHasStaff){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')  
    }
    return this.http.post(CONSTANTS.API+'/address/add', 
    JSON.stringify(relationship), 
    options);
  }



}
