import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }


  name = 
    { id: '123456',
      firstName: 'Renata',
      middleInit: 'D',
      lastName: 'Mehoves',
      type: 'Customer',
      subType: 'Wedding'
      };
  

  getName() {
    return this.name;
  }
}
