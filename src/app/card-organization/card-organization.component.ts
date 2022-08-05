import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-organization',
  templateUrl: './card-organization.component.html',
  styleUrls: ['./card-organization.component.css']
})
export class CardOrganizationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  id = 1010844;
  public search(){
    this.router.navigate(['/Dashboard/Ledger'],
    { queryParams: {id: this.id}}
    );
  }
}
