import { DataShareService } from './services/data-share.service';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

  invalidLogin!: Boolean;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private dataShareService: DataShareService) {}



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(x => this.handleAuthError(x)));
    
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if(err.status=== 403) {
      this.invalidLogin = true;
      this.dataShareService.InvalidLoginFlag.next(this.invalidLogin);
      this.dataShareService.IsLoggedIn.next(false);
    //  this.router.navigateByUrl(`/`);
      
    return of();

    }
    return throwError(() => new Error());
  }
}
