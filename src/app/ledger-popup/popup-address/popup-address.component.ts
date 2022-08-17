import { Address } from './../../address';
import { StateService } from './../../services/state.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddressService } from '../../services/address.service';


@Component({
  selector: 'app-popup-address',
  templateUrl: './popup-address.component.html',
  styleUrls: ['./popup-address.component.css']
})
export class PopupAddressComponent implements OnInit {

  addressList!: {
    id: number,
    entity_id: number,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zipcode: string,
    unreachable: boolean
  }[];

  stateList: any;

  formExisting: FormGroup[]= [];

  formNewAddress: FormGroup;

  newAddressBool: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addressService: AddressService,
    private dialogRef: MatDialogRef<PopupAddressComponent>,
    private stateService: StateService) { }

  ngOnInit(): void {
    this.addressList = this.data.addressList;
    
    this.stateService.getStateList()
      .subscribe(
        (response: any) => {
          this.stateList = response;
        }
      )
      
    

    this.formNewAddress = new FormGroup({
      address1: new FormControl('', [
        Validators.required
      ]),
      address2: new FormControl(''),
      city: new FormControl('', [
        Validators.required
      ]),
      state: new FormControl('State', [
        Validators.required
      ]),
      zipcode: new FormControl('', [
        Validators.required
      ])
    })

    for(var address of this.addressList){
      this.formExisting.push(
        new FormGroup({
          address1: new FormControl(address.address1, [
            Validators.required
          ]),
          address2: new FormControl(address.address2),
          city: new FormControl(address.city, [
            Validators.required
          ]),
          state: new FormControl(address.state, [
            Validators.required
          ]),
          zipcode: new FormControl(address.zipcode, [
            Validators.required,
            Validators.maxLength(5),
            Validators.minLength(5)
          ]),
          unreachable: new FormControl(address.unreachable)
        })
      );
    }
    
  } // end ngOnInit

  onReplace(index: number){
    let address: Address = new Address();
    let recordId: number = this.addressList[index].id;

    address.entity_id = this.data.id;
    address.address1 = this.formExisting[index].value.address1;
    address.address2 = this.formExisting[index].value.address2;
    address.city = this.formExisting[index].value.city;
    address.state = this.formExisting[index].value.state;
    address.zipcode = this.formExisting[index].value.zipcode;
    address.unreachable = this.formExisting[index].value.unreachable;
    
    this.addressService.replaceAddress(address, recordId)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      );

  }

  onDelete(index: number){
    this.addressService.inactiveAddress(this.addressList[index].id)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      );
  }

  onAdd(){
    let address: Address = new Address();

    address.entity_id = this.data.id;
    address.address1 = this.formNewAddress.value.address1;
    address.address2 = this.formNewAddress.value.address2;
    address.city = this.formNewAddress.value.city;
    address.state = this.formNewAddress.value.state;
    address.zipcode = this.formNewAddress.value.zipcode;

    this.addressService.createAddress(address)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      )
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
