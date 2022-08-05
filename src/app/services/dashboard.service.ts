import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  currentPrivilege!: string;

  setCurrentPrivilege(i: string) {
    this.currentPrivilege = i;
  }

  getCurrentPrivilege() {
    return this.currentPrivilege;
  }

}

