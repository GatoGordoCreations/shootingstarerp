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

  constructor (private router: Router, private privileges: PrivilegesService) {
    //router.navigateByUrl('/'+ new PrivilegesService().getPrivileges()[0].name)

    privileges.setCurrentPrivilege(privileges.getPrivileges()[0].name);

    this.isLoggedIn = false;
  }

  

  
}
