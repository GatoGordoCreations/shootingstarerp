import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'advancedPersonSearch',
  templateUrl: './advanced-person-search.component.html',
  styleUrls: ['./advanced-person-search.component.css']
})
export class AdvancedPersonSearchComponent{

  constructor() { }

  

  moveOn(e: any, from: any, to: any): void {

    var length = e.target.value.length;
    var maxlength = Number(from.getAttribute('maxlength'));
    
    if (length == maxlength) {
      to.focus();
    }
    
  }
  

}



