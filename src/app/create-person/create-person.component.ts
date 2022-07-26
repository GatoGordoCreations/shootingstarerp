import { StateService } from '../services/state.service';
import { Component, OnInit } from '@angular/core';
import { PhoneTypeService } from '../services/phone-type.service';

@Component({
  selector: 'createPerson',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  workSelected: boolean = false;

  constructor(private phoneType: PhoneTypeService, private state: StateService) { }

  ngOnInit(): void {
  }

  getPhoneType(): { phoneType: string, phoneType_abbr: string}[] {
    return this.phoneType.getPhoneType();
  }

  getStates() {
    return this.state.getStateList();
  }

  moveOn(e: any, from: any, to: any): void {

    var length = e.target.value.length;
    var maxlength = Number(from.getAttribute('maxlength'));
    
    if (length == maxlength) {
      to.focus();
    }
    
  }

  onSelected(e: any) {
    if (e.target.value=='Work') {
      this.workSelected = true;
    }
    if (e.target.value!='Work') {
      this.workSelected = false;
    }
  }
}
