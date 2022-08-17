
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Phone } from '../../phone';
import { PhoneService } from '../../services/phone.service';
import { PhoneTypes } from '../../PhoneTypes';

@Component({
  selector: 'popup-contact',
  templateUrl: './popup-contact.component.html',
  styleUrls: ['./popup-contact.component.css']
})
export class PopupContactComponent implements OnInit {



  phoneList!: { 
    id: number,
    phone_type: string,
    entity_id: number, 
    short_desc: string, 
    phone_num1: string,
    phone_num2: string,
    phone_num3: string,
    phone_ext: string,
    active: boolean,
    out_of_service: boolean  }[];
  
  

  saveArray: boolean[] = []; 

  phoneTypes!: PhoneTypes[];

  formArray: FormGroup[]= [];

  formNewPhone: FormGroup;

  newNumBool: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private phoneService: PhoneService,
    private dialogRef: MatDialogRef<PopupContactComponent>) {}

  ngOnInit(): void {
    this.phoneList = this.data.phoneList;
    this.phoneService.getAllPhoneTypes()
      .subscribe(
        (returnTypes) => {
          this.phoneTypes = returnTypes;
          
        }
      )
   
    this.formNewPhone = new FormGroup(
      {phone_type: new FormControl('Type'),
        phone_num1: new FormControl('', [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3)
        ]),
        phone_num2: new FormControl('', [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3)
        ]),
        phone_num3: new FormControl('', [
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4)
        ]),
        phone_ext: new FormControl('')}
    );

    for(var nums of this.phoneList){
      this.saveArray.push(false);
      this.formArray.push(
        new FormGroup({
          phone_type: new FormControl(nums.phone_type),
          phone_num1: new FormControl(nums.phone_num1),
          phone_num2: new FormControl(nums.phone_num2),
          phone_num3: new FormControl(nums.phone_num3),
          phone_ext: new FormControl(nums.phone_ext),
          out_of_service: new FormControl(nums.out_of_service),
        })
      );
    }

  }
  


  changeDetected(index: number){
    if( this.formArray[index].dirty ){ this.saveArray[index] = true
    } else this.saveArray[index] = false;
    
  }

  onSubmit(index: number){
    console.log(this.formArray[index].value);
  }

  onReplace(index: number){
    let phone: Phone = new Phone();
    let recordId: number = this.phoneList[index].id;

    phone.entity_id = this.data.id;
    phone.phone_type = this.formArray[index].value.phone_type;
    phone.phone_num1 = this.formArray[index].value.phone_num1;
    phone.phone_num2 = this.formArray[index].value.phone_num2;
    phone.phone_num3 = this.formArray[index].value.phone_num3;
    phone.phone_ext = this.formArray[index].value.phone_ext;
    phone.out_of_service = this.formArray[index].value.out_of_service;

    this.phoneService.replacePhone(phone, recordId)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
          
      );
  }

  onAdd(){
    let phone: Phone = new Phone();
    phone.entity_id = this.data.id;
    phone.phone_type = this.formNewPhone.value.phone_type;
    phone.phone_num1 = this.formNewPhone.value.phone_num1;
    phone.phone_num2 = this.formNewPhone.value.phone_num2;
    phone.phone_num3 = this.formNewPhone.value.phone_num3;
    phone.phone_ext = this.formNewPhone.value.phone_ext;

    this.phoneService.addPhone(phone)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  
  deletePhoneNum(index: number){
    this.phoneService.inactivePhone(this.phoneList[index].id)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      );
  }
  
}
