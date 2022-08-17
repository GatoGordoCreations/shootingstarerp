import { AddressService } from './../../services/address.service';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from './../../services/phone.service';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupContactComponent } from '../../ledger-popup/popup-contact/popup-contact.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PopupEmailComponent } from '../../ledger-popup/popup-email/popup-email.component';
import { PopupAddressComponent } from '../../ledger-popup/popup-address/popup-address.component';

@Component({
  selector: 'app-ledger-contact',
  templateUrl: './ledger-contact.component.html',
  styleUrls: ['./ledger-contact.component.css']
})
export class LedgerContactComponent implements OnInit {

  addressList!: { id: number, 
              entity_id: number,
              address1: string, 
              address2: string | null, 
              city: string, 
              state: string, 
              zipcode: string,
              unreachable: boolean,
              active: boolean,
              begin_date: Date,
              end_date: Date}[];

  phoneList!: { 
            id: number,
            phone_type: string,
            entity_id: number, 
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
    private route: ActivatedRoute,
    private dialog: MatDialog
    ) { }



  ngOnInit(): void {

    this.route.queryParams
      .subscribe( params  => {
        this.id = +params['id']; 

      
      this.getPhoneData();

      this.getEmailData();
      
      this.getAddressData();

      
      }) // getters based on querry params return
  } // end INIT

  openPhoneDialog(){
    const dialogRef = this.dialog.open(
      PopupContactComponent, 
      {height: '500px', 
      width: '900px',
      data: {
        phoneList: this.phoneList, 
        id: this.id}
      }
    );
    dialogRef.afterClosed()
      .subscribe(
        (res) => {
          this.getPhoneData();
        }
      );  
  } // end openPhoneDialog

  openEmailDialog(){
    const dialogRef = this.dialog.open(
      PopupEmailComponent,
      {height: '500px',
      width: '900px',
    data: {
      emailList: this.emailList,
      id: this.id}
    }
  );
  dialogRef.afterClosed()
    .subscribe(
      (res) => {
        this.getEmailData();
      }
    );
  } // end openEmailDialog

  openAddressDialog(){
    const dialogRef = this.dialog.open(
      PopupAddressComponent,
      {height: '500px',
      width: '900px',
        data: {
        addressList: this.addressList,
        id: this.id}
      }
    );
    dialogRef.afterClosed()
      .subscribe(
        (res) => {
         this.getAddressData();
        }
      );
  } // end openEmailDialog


  getPhoneData(){
    this.phoneService.getPhoneList(this.id)
          .subscribe(
            (phoneList) => {
              this.phoneList = phoneList;
            }
          )
  } //end get phone data

  getEmailData(){
    this.emailService.getEmailByEntity_Id(this.id)
            .subscribe(
              (emailList) => {
                this.emailList = emailList;
              }
            )
  } // end get email data

  getAddressData(){
    this.addressService.getAllAddressByEntity_Id(this.id)
              .subscribe(
                (addressList) => {
                  this.addressList = addressList;
                }
              )

  } // end get address data


}
