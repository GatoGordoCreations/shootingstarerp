import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SalesAuthGuard implements CanActivate {

  roleCheck: string = "Sales";

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    var test: string[] = this.authService.getRoles();
    if(test.includes(this.roleCheck)) return true;

    this.router.navigate(['/login'])
    return false;
  }


}
