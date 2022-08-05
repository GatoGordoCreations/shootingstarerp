
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../constants';




@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  

  constructor(private http: HttpClient) { 

  }


  getTypes(): Observable<string> {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().append('Authorization', 'Bearer ' + token)
    }
    return this.http.get<string>(CONSTANTS.API+'/organization/types', options);
  }

  getSubTypes(id: number){
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token),
      params: new HttpParams()
        .append('id', id),
      responseType: 'text' as 'json'

    };
    return this.http.get<string>(CONSTANTS.API+'/organization/get/subtype', options);

  }

  addOrg(orgData: any): Observable<any> {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().append('Authorization', 'Bearer ' + token),
      params: new HttpParams()
        .append('name', orgData.org_name)
        .append('type', orgData.organization_type)
        .append('url', orgData.url)
    };
    return this.http.post(CONSTANTS.API+'/organization/add', JSON.stringify(orgData), options)
  }

  getOrg(id: number): Observable<any> {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().append('Authorization', 'Bearer ' + token),
      params: new HttpParams()
        .append('id', id)
    };
    return this.http.get(CONSTANTS.API + '/organization/get', options)
  }

  


}
