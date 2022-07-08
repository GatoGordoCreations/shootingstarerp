import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  private uuid: any;

  person_type!: string;

  name = 'Unknown';
  id = 'Unknown';
  type = 'Unknown';
  subType = 'Unknown';

  ledger_tab = 'null';

  

  ngOnInit(): void {  

    
    
    this.route.paramMap
      .subscribe( params => {
          this.uuid = params.get('uuid');
          
      })

      this.person_type = "Customer";

      this.name = this.personService.getName().firstName 
                  + ' ' 
                  + this.personService.getName().middleInit
                  + ' '
                  + this.personService.getName().lastName;
      
      this.id = this.personService.getName().id;

      this.type = this.personService.getName().type;

      this.subType = this.personService.getName().subType;
  }

  getUUID(): string {
    return this.uuid;
  }



  
}
