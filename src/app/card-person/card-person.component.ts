import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.css']
})
export class CardPersonComponent implements OnInit {

  constructor(private router: Router) { }

  onClick() {
    this.router.navigateByUrl('/Person/123456');
  }


  ngOnInit(): void {
  }

}
