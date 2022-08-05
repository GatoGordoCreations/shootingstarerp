import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PhotographerAuthGuard {

  
  roleCheck: string = "Photographer";

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
