import { LedgerContactService } from './../../services/ledger-contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledger-contact',
  templateUrl: './ledger-contact.component.html',
  styleUrls: ['./ledger-contact.component.css']
})
export class LedgerContactComponent implements OnInit {

  address!: { line1: string, line2: string, city: string, state: string, zip: string};

  phone!: { type: string, number: string}[];

  email!: { email: string }[];

  constructor(private ledgerService: LedgerContactService) { 
    this.address = ledgerService.getAddress();
    this.phone = ledgerService.getPhone();
    this.email = ledgerService.getEmail();

  }



  ngOnInit(): void {
  }




}
