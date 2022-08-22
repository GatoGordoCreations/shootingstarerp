import { Router } from '@angular/router';
import { SearchService } from './../services/search.service';
import { LoadingService } from './../services/loading-service.service';
import { FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { OrgSearch } from '../OrgSearch';
import { SearchOrgReturn } from '../SearchOrgReturn';

@Component({
  selector: 'advancedOrganizationSearch',
  templateUrl: './advanced-organization-search.component.html',
  styleUrls: ['./advanced-organization-search.component.css']
})
export class AdvancedOrganizationSearchComponent implements OnInit {

  stateList: any[];

  searchReturn: SearchOrgReturn[];

  formSearch: FormGroup;

  loading$ = this.loader.loading$;

  constructor(
    private stateService: StateService,
    private fb: FormBuilder,
    private loader: LoadingService,
    private searchService: SearchService,
    private router: Router) { }

  ngOnInit(): void {
    this.stateService.getStateList()
      .subscribe(
        (stateData: any) => {
          this.stateList = stateData;
        }
      );
    
      this.formSearch = this.fb.group({
        org_name: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]]
      })

  }

  search() {
    let orgSearch: OrgSearch = new OrgSearch();

    orgSearch.org_name = this.formSearch.value.org_name;
    orgSearch.city = this.formSearch.value.city;
    orgSearch.state = this.formSearch.value.state;


    if(this.formSearch.controls['org_name'].valid
    && this.formSearch.controls['city'].invalid
    && this.formSearch.controls['state'].invalid){
      this.searchService.findOrgByName(orgSearch)
        .subscribe(
          (returnList: any) => {
            this.searchReturn = returnList;
          }
        );
    }

    else if(this.formSearch.controls['org_name'].invalid
    && this.formSearch.controls['city'].valid
    && this.formSearch.controls['state'].invalid){
      this.searchService.findOrgByCity(orgSearch)
        .subscribe(
          (returnList: any) => {
            this.searchReturn = returnList;
          }
        );
    }

    else if(this.formSearch.controls['org_name'].invalid
    && this.formSearch.controls['city'].invalid
    && this.formSearch.controls['state'].valid){
      this.searchService.findOrgByState(orgSearch)
        .subscribe(
          (returnList: any) => {
            this.searchReturn = returnList;
          }
        );
    }

    else {
      this.searchService.findOrgByAll(orgSearch)
      .subscribe(
        (returnList: any) => {
          this.searchReturn = returnList;

        }
      );

    } //end else
    
  }
  selectRow(id: any){
    
    document.getElementById(id)?.classList.add('selected-hover');
  }
  unselectRow(id:any){
    document.getElementById(id)?.classList.remove('selected-hover');
  }

  openLedger(id: any){
    this.router.navigate(['Dashboard/Ledger'],
            { queryParams: {id: id}}
            );
  }
  
}
