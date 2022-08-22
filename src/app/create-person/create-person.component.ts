import { Email } from './../email';
import { AddressService } from './../services/address.service';
import { EmailService } from './../services/email.service';
import { Router } from '@angular/router';
import { LoadingService } from './../services/loading-service.service';
import { PersonService } from './../services/person.service';
import { StateService } from '../services/state.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhoneService } from '../services/phone.service';
import { ConnectableObservable } from 'rxjs';
import { PhoneTypes } from '../PhoneTypes';
import { Person } from '../person';
import { Phone } from '../phone';
import { Address } from '../address';

@Component({
  selector: 'createPerson',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  loading$ = this.loader.loading$;

  workSelected: boolean = false;

  formNewPerson: FormGroup;

  phoneTypes!: PhoneTypes[];

  personTypes: any[]=[];

  stateList: any;

  constructor(
    private phoneService: PhoneService, 
    private emailService: EmailService,
    private addressService: AddressService,
    private state: StateService,
    private personService: PersonService,
    private fb: FormBuilder,
    private loader: LoadingService,
    private router: Router) { }

  ngOnInit(): void {

    this.phoneService.getAllPhoneTypes()
      .subscribe(
        (returnTypes: any) => {
          this.phoneTypes = returnTypes;
          
        }
      );

    this.state.getStateList()
      .subscribe(
        (stateData: any) => {
          this.stateList = stateData;
        }
      );
    
    this.personService.getAllPersonTypes()
        .subscribe(
          (typeData: any) => {
            for(var type of typeData){
              
              if(type.short_desc!=="Employee"){
                this.personTypes.push(type);
              }
            }
           
          }
        );



    this.formNewPerson = this.fb.group({
      person: this.fb.group ({
        f_name: ['', [Validators.required]],
        m_init: [''],
        l_name: ['', [Validators.required]],
        type: ['', [Validators.required]]
      }),
      phone: this.fb.group ({
        phone_type: ['Type', [
          Validators.required]],
        phone_num1: ['', [
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(3)]],
        phone_num2: ['', [
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(3)]],
        phone_num3: ['', [
          Validators.required, 
          Validators.minLength(4), 
          Validators.maxLength(4)]],
        phone_ext: ['', [
          Validators.maxLength(5)]]
      }),
      email: this.fb.group ({
        email_addr: ['', [Validators.required, Validators.email]]
      }),
      address: this.fb.group ({
        address1: ['', [Validators.required]],
        address2: [''],
        city: ['', [Validators.required]],
        state: ['State', [Validators.required]],
        zipcode: ['', [Validators.required]]
      })
    })
  }

  createPerson(){
    let person: Person = new Person();

    person.fname = this.formNewPerson.controls['person'].value.f_name;
    person.minit = this.formNewPerson.controls['person'].value.m_init;
    person.lname = this.formNewPerson.controls['person'].value.l_name;
    person.type = this.formNewPerson.controls['person'].value.type;

    if(this.formNewPerson.controls['person'].valid){
      
      let id: number;

      this.personService.addNewPerson(person)
      .subscribe(
        (personData: any) => {
          
          id = personData.id;
          

          if(this.formNewPerson.controls['email'].valid) {
            let email: Email = new Email();
            email.entity_id = id;
            email.email_addr = this.formNewPerson.controls['email'].value.email_addr;
            
            this.emailService.addEmail(email)
              .subscribe(
                (emailData) => {}
            );
          }

          if(this.formNewPerson.controls['phone'].valid) { 
            let phone: Phone = new Phone();
            
            phone.entity_id = id;
            phone.phone_num1 = this.formNewPerson.controls['phone'].value.phone_num1;
            phone.phone_num2 = this.formNewPerson.controls['phone'].value.phone_num2;
            phone.phone_num3 = this.formNewPerson.controls['phone'].value.phone_num3;
            phone.phone_ext = this.formNewPerson.controls['phone'].value.phone_ext;
            phone.phone_type = this.formNewPerson.controls['phone'].value.phone_type;
            
            this.phoneService.addPhone(phone)
              .subscribe(
                (phoneData) => {}
              );
          }

          if(this.formNewPerson.controls['address'].valid) { 
            let address: Address = new Address();

            address.entity_id = id;
            address.address1 = this.formNewPerson.controls['address'].value.address1;
            address.address2 = this.formNewPerson.controls['address'].value.address2;
            address.city = this.formNewPerson.controls['address'].value.city;
            address.state = this.formNewPerson.controls['address'].value.state;
            address.zipcode = this.formNewPerson.controls['address'].value.zipcode;

            this.addressService.createAddress(address)
              .subscribe(
                (addressService) => {}
              );
          }
          

          if(id){
            this.router.navigate(['Dashboard/Ledger'],
            { queryParams: {id: id}}
            );
          }
        }); // end person subscribe
    }
    
  }



  moveOn(e: any, from: any, to: any): void {

    var length = e.target.value.length;
    var maxlength = Number(from.getAttribute('maxlength'));
    
    if (length == maxlength) {
      to.focus();
    }
    
  }


}
