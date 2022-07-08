import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }


  private stateList = [
    { name: 'Alabama', abv: 'AL' },
    { name: 'Alaska', abv: 'AK' },
    { name: 'Arizona', abv: 'AZ' },
    { name: 'Arkansas', abv: 'AR' },
      
  ]

  getStateList(): { name: string, abv: string}[] {
    return this.stateList;
  }
}
