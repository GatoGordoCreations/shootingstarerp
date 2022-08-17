import { DataShareService } from './../services/data-share.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading-service.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  invalidLogin!: Boolean;  

  loading$ = this.loader.loading$;

  constructor ( 
    private router: Router,
    private authService: AuthService,
    private dataShareService: DataShareService,
    private loader: LoadingService
  ) {
    this.dataShareService.InvalidLoginFlag.subscribe((res: any) => {
      this.invalidLogin = res;
    });
  }

  
  
  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          this.invalidLogin = false;
          this.router.navigate(['Dashboard']);
        }
          
        else {
          this.invalidLogin = true;
        }
          
      })
  } 



  ngOnInit () {
    this.invalidLogin = false;
  }

}
