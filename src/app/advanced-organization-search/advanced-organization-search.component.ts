import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'advancedOrganizationSearch',
  templateUrl: './advanced-organization-search.component.html',
  styleUrls: ['./advanced-organization-search.component.css']
})
export class AdvancedOrganizationSearchComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

  getStateList(): { name: string, abbreviation: string}[] {
    return this.stateService.getStateList();
  }
}
