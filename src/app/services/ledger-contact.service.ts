import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LedgerContactService {

  address = {
    line1: '300 Maple Ln',
    line2: '',
    city: 'Elgin',
    state: 'TX',
    zip: '78621'
  };

  phone = [
    { type: 'Cell', number: '5128005965'},
    { type: 'Home', number: '5122293652'}
  ];

  email = [
    { email: 'info@gatogordocreations.com'},
    { email: 'renata@mehoves.com'}
  ];




  constructor() { }

  getAddress() {
    return this.address;
  }

  getPhone (){
    return this.phone;
  }

  getEmail (){
    return this.email;
  }
}
