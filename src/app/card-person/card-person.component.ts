import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.css']
})
export class CardPersonComponent implements OnInit {

  constructor(private router: Router) { }

  id = 123456;
  onClick() {
    this.router.navigate(['Dashboard/Ledger/', this.id]);
  }


  ngOnInit(): void {
  }

}
