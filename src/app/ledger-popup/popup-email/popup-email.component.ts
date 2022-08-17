import { MatDialogRef, MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';
import { EmailService } from './../../services/email.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Email } from '../../email';

@Component({
  selector: 'app-popup-email',
  templateUrl: './popup-email.component.html',
  styleUrls: ['./popup-email.component.css']
})
export class PopupEmailComponent implements OnInit {

  emailList!: {
    id: number,
    entity_id: number,
    email_addr: string,
    failed: boolean,
    active: boolean,
    begin_date: Date,
    end_date: Date
  }[];

  newEmailBool: boolean;

  formExisting: FormGroup[] = [];

  formNewEmail: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private emailService: EmailService,
    private dialogRef: MatDialogRef<PopupEmailComponent>) { }

  ngOnInit(): void {
    this.emailList = this.data.emailList;

    this.formNewEmail = new FormGroup({
      email_addr: new FormControl('', [
        Validators.email,
        Validators.required
      ])
    })

    for(var email of this.emailList){
      this.formExisting.push(
        new FormGroup({
          email_addr: new FormControl(email.email_addr),
          failed: new FormControl(email.failed)
        })
      );
    }
  }

  onReplace(index: number){
    let email: Email = new Email();
    let recordId: number = this.emailList[index].id;

    email.entity_id = this.data.id;
    email.email_addr = this.formExisting[index].value.email_addr;
    email.failed = this.formExisting[index].value.failed;

    this.emailService.replaceEmail(email, recordId)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      );
  }

  onDelete(index:number){
    this.emailService.inactiveEmail(this.emailList[index].id)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      )
  }

  onAdd(){
    let email: Email = new Email();

    email.entity_id = this.data.id;
    email.email_addr = this.formNewEmail.value.email_addr;

    this.emailService.addEmail(email)
      .subscribe(
        (data) => {
          this.closeDialog();
        }
      );
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
