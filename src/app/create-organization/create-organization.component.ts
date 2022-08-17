import { Org } from './../org';
import { AddressService } from './../services/address.service';
import { EmailService } from './../services/email.service';
import { PhoneService } from './../services/phone.service';
import { Phone } from './../phone';

import { OrganizationService } from './../services/organization.service';
import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Email } from '../email';
import { Address } from '../address';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../services/loading-service.service';


@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  orgTypes: any = [];
  statesList: any;
  type: boolean = true;
  name: boolean= true;

  formNewOrg: FormGroup;

  constructor(
    private router: Router,
    private state: StateService, 
    private orgService: OrganizationService,
    private phoneService: PhoneService,
    private emailService: EmailService,
    private addressService: AddressService,
    private fb: FormBuilder,
    private loader: LoadingService) { 
    
  }

  loading$ = this.loader.loading$;
  
  ngOnInit(): void {
    this.getTypes();

    this.state.getStateList()
      .subscribe(
        (data: any) => {
          this.statesList = data;
        }
      );

    this.formNewOrg = this.fb.group({
      org: this.fb.group({
        org_name: ['', [Validators.required]],
        url: [''],
        organization_type: ['', [Validators.required]]
      }),
      address: this.fb.group({
        address1: ['', [Validators.required]],
        address2: [''],
        city: ['', [Validators.required]],
        state: ['State', [Validators.required]],
        zipcode: ['', [Validators.required]]
      }),
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
      email: this.fb.group({
        email_addr: ['', [Validators.email]]
      })
    })
  
  }
  
  



  moveOn(e: any, from: any, to: any): void {

    var length = e.target.value.length;
    var maxlength = Number(from.getAttribute('maxlength'));
    
    if (length == maxlength) {
      to.focus();
    }   
  }

  

  getTypes() {
    this.orgService.getTypes()
      .subscribe((response) => {
        this.orgTypes = response;
      })
  }

  ///////  Create Org and subsidiary API calls
  ////////////////////////////////////////////
  createOrg() {
    
    let id: number;
    
    if(this.formNewOrg.controls['org'].valid){
      let org: Org = new Org();
      
      org.name = this.formNewOrg.controls['org'].value.org_name;
      org.type = this.formNewOrg.controls['org'].value.organization_type;
      org.url = this.formNewOrg.controls['org'].value.url;

      this.orgService.addOrg(org)
        .subscribe(
          (orgResp) => {
            id = orgResp.id; // store entity_id # for later use


            //create email if valid
            if(this.formNewOrg.controls['email'].valid){
              let email: Email = new Email();

              email.entity_id = id;
              email.email_addr = this.formNewOrg.controls['email'].value.email_addr;

              this.emailService.addEmail(email)
                .subscribe(
                  (emailData) => {}
                );

            }

            //create phone if valid
            if(this.formNewOrg.controls['phone'].valid){
              let phone: Phone = new Phone();

              phone.entity_id = id;
              phone.phone_num1 = this.formNewOrg.controls['phone'].value.phone_num1;
              phone.phone_num2 = this.formNewOrg.controls['phone'].value.phone_num2;
              phone.phone_num3 = this.formNewOrg.controls['phone'].value.phone_num3;
              phone.phone_type = '3';
              this.phoneService.addPhone(phone)
                .subscribe(
                  (phoneData) => {}
                );
            }

            //create address if valid
            if(this.formNewOrg.controls['address'].valid){
              let address: Address = new Address();

              address.entity_id = id;
              address.address1 = this.formNewOrg.controls['address'].value.address1;
              address.address2 = this.formNewOrg.controls['address'].value.address2;
              address.city = this.formNewOrg.controls['address'].value.city;
              address.state = this.formNewOrg.controls['address'].value.state;
              address.zipcode = this.formNewOrg.controls['address'].value.zipcode;

              this.addressService.createAddress(address)
                .subscribe(
                  (addressData) => {}
                );
            }

            if(id){
              this.router.navigate(['Dashboard/Ledger'],
              { queryParams: {id: id}}
              );
            }

          }); // end subscribe org promise
    } // end if org valid
  } // end create org

  resetFlag(){
    this.type = true;
    this.name = true;
  }
}
