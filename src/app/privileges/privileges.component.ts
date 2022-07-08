import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrivilegesService } from '../services/privileges.service';

@Component({
  selector: 'privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.css', '../../styles.css']
})
export class PrivilegesComponent implements OnInit {
  
  pService: PrivilegesService;
  selected!: string;

  
  privileges: { id: number, name: string} [];

  constructor (private router: Router, private privSer:PrivilegesService) {
    this.pService = new PrivilegesService();
    this.privileges = this.pService.getPrivileges();
  }
  
  
  update(e: any) {
    this.selected = e.target.value;
    this.router.navigateByUrl('/'+this.selected);
    this.privSer.setCurrentPrivilege(this.selected);
  }


  
  ngOnInit(): void {
  }

}
