import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrivilegesService } from '../services/privileges.service';

@Component({
  selector: 'photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {

 

  constructor(private privSer:PrivilegesService) {}

  ngOnInit() {
    this.privSer.currentUserPrivileges.subscribe();
  }

  onClick() {
    console.log("Click Worked")
    console.log(this.privSer.getPrivileges()[0].name);
  }



  
}


