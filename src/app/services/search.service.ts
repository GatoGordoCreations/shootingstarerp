import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrgSearch } from './../OrgSearch';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants';
import { PersonSearch } from '../personsearch';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  public findOrgByAll(search: OrgSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/organization/all',
      JSON.stringify(search),
      options);
  }

  public findOrgByName(search: OrgSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/organization/name',
      JSON.stringify(search.org_name),
      options);
  }

  public findOrgByCity(search: OrgSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/organization/city',
      JSON.stringify(search.city),
      options);
  }

  public findOrgByState(search: OrgSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/organization/state',
      JSON.stringify(search.state),
      options);
  }

  public findPersonByF_Name(search: PersonSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/person/f_name',
      JSON.stringify(search),
      options);
  }

  public findPersonByM_Init(search: PersonSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/person/m_init',
      JSON.stringify(search),
      options);
  }

  public findPersonByL_Name(search: PersonSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/person/l_name',
      JSON.stringify(search),
      options);
  }

  public findPersonByPhone(search: PersonSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/person/phone',
      JSON.stringify(search),
      options);
  }

  public findPersonByEmail(search: PersonSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/person/email_addr',
      JSON.stringify(search),
      options);
  }

  public findPersonByOrg(search: PersonSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/person/org',
      JSON.stringify(search),
      options);
  }

  public findPersonByAll(search: PersonSearch) {
    let token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token)
        .append('content-type', 'application/json')      
    }
    return this.http.post(
      CONSTANTS.API+'/search/person/all',
      JSON.stringify(search),
      options);
  }


}
