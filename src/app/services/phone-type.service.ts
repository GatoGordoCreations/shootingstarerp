import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneTypeService {

  constructor() { }


  private phoneType: { phoneType: string, phoneType_abbr: string }[] = [
    { phoneType: 'House', phoneType_abbr: 'H'},
    { phoneType: 'Cell', phoneType_abbr: 'C'},
    { phoneType: 'Work', phoneType_abbr: 'W'}  
  ];

  getPhoneType(): { phoneType: string, phoneType_abbr: string}[] {
    return this.phoneType;
  }

}
