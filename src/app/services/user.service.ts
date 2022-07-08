import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user = "Renata Mehoves";

  getUser():String{
    return this.user;
  }
}
