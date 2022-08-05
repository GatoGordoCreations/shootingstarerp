import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.user = this.getUser();
  }
  user: String;
  

  getUser(): String { return this.authService.currentUser(); }
  
  logout(e: any) {
    if (e.target.value="logout") {
      this.authService.logout();
    }
    
  }

  ngOnInit(): void {

  }

}

