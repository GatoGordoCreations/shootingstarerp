import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{



  
  roleCheck: string = "Administrator";

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
