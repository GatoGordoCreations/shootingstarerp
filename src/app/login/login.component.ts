import { DataShareService } from './../services/data-share.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  invalidLogin!: Boolean;  

  constructor ( 
    private router: Router,
    private authService: AuthService,
    private dataShareService: DataShareService
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
          console.log("Service Response: ", this.authService.currentUser().firstName);
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
