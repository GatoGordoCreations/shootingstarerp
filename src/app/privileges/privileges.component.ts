import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../Services/dashboard.service';



@Component({
  selector: 'privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.css', '../../styles.css']
})
export class PrivilegesComponent implements OnInit {
  
  
  selected!: string;

  
  privileges: Array<string>;

  

  constructor (private router: Router, 
    private authService: AuthService, 
    private dashboardService: DashboardService) 
    {
      this.privileges = authService.getRoles();
      this.selected = this.privileges[0];
      this.router.navigateByUrl('/Dashboard/'+this.selected);
      this.dashboardService.setCurrentPrivilege(this.selected)

  }
  
  
  
  update(e: any) {
    this.selected = e.target.value;
    this.router.navigateByUrl('/Dashboard/'+this.selected);
    this.dashboardService.setCurrentPrivilege(this.selected);
  }


  
  ngOnInit(): void {
  }

}
