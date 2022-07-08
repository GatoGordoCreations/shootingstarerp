import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL;

  constructor(private http: HttpClient, private router: Router) { 
    this.loginURL = 'http://localhost:8090/auth/login';
  }

  invalidLogin!: Boolean;



  login(credentials:any): Observable<any>{
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      
    
    return this.http.post<CredentialInterface>(this.loginURL, JSON.stringify(credentials), {'headers':headers})
        .pipe(
          (map(res => {
          if (res && res.accessToken) {
            localStorage.setItem('token', res.accessToken)
            return true;
          }
          return false;
          }))
        );
  } //end login

  setInvalidLogin(x: Boolean) {
    this.invalidLogin = x;
  }

}

export interface CredentialInterface {
  username: string;
  accessToken: string;
}

