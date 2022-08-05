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


@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  orgTypes: any = [];

  type: boolean = true;
  name: boolean= true;

  constructor(
    private router: Router,
    private state: StateService, 
    private orgService: OrganizationService,
    private phoneService: PhoneService,
    private emailService: EmailService,
    private addressService: AddressService) { 
    
  }

  ngOnInit(): void {
    this.getTypes();
    

  }
  states: any;
  getStates() {
    if(this.states) return this.states;
    this.states = this.state.getStateList()
    return this.states;  
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
  createOrg(orgData: any) {
    let id: number;
    if(this.hasOrgData(orgData)){


      this.orgService.addOrg(orgData)
        .subscribe((response) => {

          console.log(response);
          id = response.id; // store entity_id # for later use

          /////// create email, if one exists
          if(orgData.email) {
            let eObj = new Email();
            eObj.entity_id = id; // assign entity_id from return
            eObj.email_addr = orgData.email;  // assign email form form
            this.emailService.addEmail(eObj)
              .subscribe((emailData) => {
                console.log(emailData);
              })
            
          }
          ////////// Create phone, if one exists
          if(orgData.phone_num1 && orgData.phone_num2 && orgData.phone_num3){
            let pObj = new Phone();
            pObj.entity_id = id; // assign entity_id from return
            pObj.phone_num1 = orgData.phone_num1;  ////// asign phone numbers 1 - 3 
            pObj.phone_num2 = orgData.phone_num2;
            pObj.phone_num3 = orgData.phone_num3;
            pObj.phone_type = "3";

            this.phoneService.addPhone(pObj)
              .subscribe((phoneData) => {
                console.log(phoneData);
              })
          }
          //////////// Create address, if one exists
          if(orgData.address1 ||
            orgData.address2 ||
            orgData.city ||
            orgData.state ||
            orgData.zipcode
            ){
              let aObj = new Address();
              aObj.entity_id = id;
              aObj.address1 = orgData.address1;
              aObj.address2 = orgData.address2;
              aObj.city = orgData.city;
              aObj.state = orgData.state;
              aObj.zipcode = orgData.zipcode;

              this.addressService.createAddress(aObj)
                .subscribe((addressData) => {
                  console.log(addressData);
                })
            }
          if(response){
            this.router.navigate(['Dashboard/Ledger', id])
          }
        }) 
    }
    
    
  }

  private hasOrgData(orgData: any): boolean {
    let falseTest = true;
    if(!orgData.organization_type) {
      this.type = false;
      falseTest = false;
    }
    if(!orgData.org_name) {
      this.name = false;
      falseTest = false;
    }
    if(!falseTest) return false;
    this.type = true;
    return true;
  }

  resetFlag(){
    this.type = true;
    this.name = true;
  }
}
