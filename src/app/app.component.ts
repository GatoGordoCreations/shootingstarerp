import { AuthService } from './services/auth.service';
import { DataShareService } from './services/data-share.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrivilegesService } from './services/privileges.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shootingstarerp';
  currentView = 3;

  isLoggedIn!: Boolean;

  constructor (private router: Router, 
    private privileges: PrivilegesService,
    private authService: AuthService) {
    
    privileges.setCurrentPrivilege(privileges.getPrivileges()[0].name);
    
    
  }

  

  
}
