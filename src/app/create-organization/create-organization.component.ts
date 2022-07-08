import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit(): void {
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
}
