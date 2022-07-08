import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {

  private currentPrivilege: string = 'null'; 

  private userPrivileges =[
    { id: 3, name: 'Sales'}
  ];

  private up = new BehaviorSubject(this.userPrivileges);
  currentUserPrivileges  = this.up.asObservable();

  constructor() {}
   
   getPrivileges(): { id: number; name: string; }[] {
    return this.userPrivileges
   }

   getCurrentPrivilege(): string {
    return this.currentPrivilege;
  }
  
  setCurrentPrivilege(cp: string): void {
    this.currentPrivilege = cp;
  }

}
