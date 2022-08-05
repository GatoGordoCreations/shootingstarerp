import { AddressService } from './../../services/address.service';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from './../../services/phone.service';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-ledger-contact',
  templateUrl: './ledger-contact.component.html',
  styleUrls: ['./ledger-contact.component.css']
})
export class LedgerContactComponent implements OnInit {

  addressList!: { id: number, 
              entity_id: number,
              address1: string, 
              address2: string, 
              city: string, 
              state: string, 
              zipcode: string,
              unreachable: boolean,
              active: boolean,
              begin_date: Date,
              end_date: Date}[];

  phoneList!: { entity_id: number, 
            short_desc: string, 
            phone_num1: string,
            phone_num2: string,
            phone_num3: string,
            phone_ext: string,
            out_of_service: boolean  }[];

  emailList!: { id: number,
            entity_id: number,
            email_addr: string,
            failed: boolean,
            active: boolean,
            begin_date: Date,
            end_date: Date }[];

  id: number;



  constructor(
    private phoneService: PhoneService,
    private emailService: EmailService,
    private addressService: AddressService,
    private route: ActivatedRoute
    ) { }



  ngOnInit(): void {

    this.route.queryParams
      .subscribe( params  => {
        this.id = +params['id']; 

      this.phoneService.getPhoneList(this.id)
          .subscribe(
            (phoneList) => {
              this.phoneList = phoneList;
              
            }
          )
      
      this.emailService.getEmailByEntity_Id(this.id)
            .subscribe(
              (emailList) => {
                this.emailList = emailList;
              }
            )

      this.addressService.getAllAddressByEntity_Id(this.id)
              .subscribe(
                (addressList) => {
                  this.addressList = addressList;
                }
              )
      }) // getters based on querry params return
  } // end INIT





}
