import { LoadingService } from './../services/loading-service.service';
import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, NgModel, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { PersonSearch } from '../personsearch';
import { subscribeOn } from 'rxjs';
import { SearchPersonReturn } from '../SearchPersonReturn';

@Component({
  selector: 'advancedPersonSearch',
  templateUrl: './advanced-person-search.component.html',
  styleUrls: ['./advanced-person-search.component.css']
})
export class AdvancedPersonSearchComponent implements OnInit{

  formSearchPerson: FormGroup;

  loading$ = this.loader.loading$;

  searchReturn: SearchPersonReturn[];

  constructor(
    private loader: LoadingService,
    private fb: FormBuilder,
    private service: SearchService
  ) { }

  ngOnInit(): void {
    
    this.formSearchPerson = this.fb.group({
      f_name: ['', [Validators.required]],
      m_init: ['', [Validators.required]],
      l_name: ['', [Validators.required]],
      phone: this.fb.group({
        phone_num1: ['', [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3)]],
        phone_num2: ['', [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3)]],
        phone_num3: ['', [
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4)]]
      }),
      email_addr: ['', [Validators.required]],
      org: ['', [Validators.required]],
      person_type: ['Customer', [Validators.required]]
    }) 
  }

  moveOn(e: any, from: any, to: any): void {

    var length = e.target.value.length;
    var maxlength = Number(from.getAttribute('maxlength'));
    
    if (length == maxlength) {
      to.focus();
    }
    
  }

  search(){
    let personSearch: PersonSearch = new PersonSearch();
    
    personSearch.f_name = this.formSearchPerson.value.f_name;
    personSearch.m_init = this.formSearchPerson.value.m_init;
    personSearch.l_name = this.formSearchPerson.value.l_name;
    personSearch.phone_num1 = this.formSearchPerson.controls['phone'].value.phone_num1;
    personSearch.phone_num2 = this.formSearchPerson.controls['phone'].value.phone_num2;
    personSearch.phone_num3 = this.formSearchPerson.controls['phone'].value.phone_num3;
    personSearch.email_addr = this.formSearchPerson.value.email_addr;
    personSearch.org = this.formSearchPerson.value.org;
    personSearch.person_type = this.formSearchPerson.value.person_type;

    console.log(personSearch);
    if(
      this.formSearchPerson.controls['f_name'].valid &&
      this.formSearchPerson.controls['m_init'].invalid &&
      this.formSearchPerson.controls['l_name'].invalid &&
      this.formSearchPerson.controls['phone'].invalid &&
      this.formSearchPerson.controls['email_addr'].invalid &&
      this.formSearchPerson.controls['org'].invalid 
    ){
      this.service.findPersonByF_Name(personSearch)
        .subscribe(
          (data: any) => {
            this.searchReturn = data;
            console.log(this.searchReturn);
          }
        );
    }

    else if(
      this.formSearchPerson.controls['f_name'].invalid &&
      this.formSearchPerson.controls['m_init'].valid &&
      this.formSearchPerson.controls['l_name'].invalid &&
      this.formSearchPerson.controls['phone'].invalid &&
      this.formSearchPerson.controls['email_addr'].invalid &&
      this.formSearchPerson.controls['org'].invalid 
    ){
      this.service.findPersonByM_Init(personSearch)
        .subscribe(
          (data: any) => {
            this.searchReturn = data;
          }
        );
    }

    else if(
      this.formSearchPerson.controls['f_name'].invalid &&
      this.formSearchPerson.controls['m_init'].invalid &&
      this.formSearchPerson.controls['l_name'].valid &&
      this.formSearchPerson.controls['phone'].invalid &&
      this.formSearchPerson.controls['email_addr'].invalid &&
      this.formSearchPerson.controls['org'].invalid 
    ){
      this.service.findPersonByL_Name(personSearch)
        .subscribe(
          (data: any) => {
            this.searchReturn = data;
          }
        );
    }

    else if(
      this.formSearchPerson.controls['f_name'].invalid &&
      this.formSearchPerson.controls['m_init'].invalid &&
      this.formSearchPerson.controls['l_name'].invalid &&
      this.formSearchPerson.controls['phone'].valid &&
      this.formSearchPerson.controls['email_addr'].invalid &&
      this.formSearchPerson.controls['org'].invalid 
    ){
      this.service.findPersonByPhone(personSearch)
        .subscribe(
          (data: any) => {
            this.searchReturn = data;
          }
        );
    }

    else if(
      this.formSearchPerson.controls['f_name'].invalid &&
      this.formSearchPerson.controls['m_init'].invalid &&
      this.formSearchPerson.controls['l_name'].invalid &&
      this.formSearchPerson.controls['phone'].invalid &&
      this.formSearchPerson.controls['email_addr'].valid &&
      this.formSearchPerson.controls['org'].invalid 
    ){
      this.service.findPersonByEmail(personSearch)
        .subscribe(
          (data: any) => {
            this.searchReturn = data;
          }
        );
    }

    else if(
      this.formSearchPerson.controls['f_name'].invalid &&
      this.formSearchPerson.controls['m_init'].invalid &&
      this.formSearchPerson.controls['l_name'].invalid &&
      this.formSearchPerson.controls['phone'].invalid &&
      this.formSearchPerson.controls['email_addr'].invalid &&
      this.formSearchPerson.controls['org'].valid 
    ){
      this.service.findPersonByOrg(personSearch)
        .subscribe(
          (data: any) => {
            this.searchReturn = data;
          }
        );
    }

    else {
      this.service.findPersonByAll(personSearch)
        .subscribe(
          (data: any) => {
            this.searchReturn = data;
          }
        );
    }

    
  }// end search()
  

}



