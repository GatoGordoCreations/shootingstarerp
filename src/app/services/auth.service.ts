import { CONSTANTS } from './../constants';
import { DataShareService } from './data-share.service';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL;
  invalidLogin!: Boolean;

  constructor(private http: HttpClient,
    private router: Router,
    private dss: DataShareService) { 
    this.loginURL = CONSTANTS.API+ '/auth/login';
  }

  



  login(credentials:any): Observable<any>{
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      
    
    return this.http.post<CredentialInterface>(this.loginURL, JSON.stringify(credentials), {'headers':headers})
        .pipe(
          (map(res => {
          if (res && res.accessToken) {
            localStorage.setItem('token', res.accessToken);
            this.dss.IsLoggedIn.next(true);
            return true;
          }
          return false;
          }))
        );
  } //end login

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isLoggedIn(): Boolean {
    
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if(!token){ return false;}

    let expirationDate = jwtHelper.getTokenExpirationDate(token!);
    let isExpired = jwtHelper.isTokenExpired(token!);

    return !isExpired;
  }


  // can us 'get' instead of public if want to access in HTML
  public currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return "No User";

    var newToken = new JwtHelperService().decodeToken(token);
    return newToken.firstName + " " + newToken.lastName;
  }

  public getRoles(): string[] {
    let token = localStorage.getItem('token');
    let err: string[] = ["Role Not Found"];
    if (!token) return err;
    let jsonRoles: {id: number, role_name: string}[] = new JwtHelperService().decodeToken(token).roles;

    let roles: string[] = Array();
    for(let i = 0; i < jsonRoles.length; i++){
      roles.push(jsonRoles[i].role_name)
    }
    return roles;
  }

}

export interface CredentialInterface {
  username: string;
  accessToken: string;
}

