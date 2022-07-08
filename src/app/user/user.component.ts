import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {
    var userService=new UserService;
    this.user = userService.getUser();
  }
  user: String;
  selected!:String;

  nameArray = [
    { id: 2, name: 'Log Out'}
  ];
  
  update(e: any) {
    this.selected = e.target.value;
    
  }

  ngOnInit(): void {
  }

}

