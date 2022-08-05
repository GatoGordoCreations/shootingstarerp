import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../Services/dashboard.service';





@Component({
  selector: 'navBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentPrivilege!: String;

  constructor(private router: Router,
    private dashboardService: DashboardService) { }

  onClick() {
    this.router.navigateByUrl('/Dashboard/'+this.dashboardService.getCurrentPrivilege())
  }

  ngOnInit(): void {
  }

}
