import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrivilegesService } from '../services/privileges.service';




@Component({
  selector: 'navBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentPrivilege!: String;

  constructor(private router: Router, private privSer:PrivilegesService) { }

  onClick() {
    this.currentPrivilege = this.privSer.getCurrentPrivilege();
    this.router.navigateByUrl('/'+this.currentPrivilege);
  }

  ngOnInit(): void {
  }

}
