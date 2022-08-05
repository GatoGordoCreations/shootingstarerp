import { EntityService } from './../services/entity.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private personService: PersonService,
    private orgService: OrganizationService,
    private entityService: EntityService) { }

  

  tab_selector: String = "Customer";


  name = 'Unknown';
  id: number;
  
  subType = 'Unknown';
  entity_type = 'Unknown';
  ledger_tab = 'null';

  

  ngOnInit(): void {  

      this.route.queryParams
        .subscribe( params  => {
          this.id = +params['id'];
      
        this.entityService.getVal(1010844).subscribe(response => {});
        });  

      
        
        

          this.name = this.personService.getName().firstName 
                      + ' ' 
                      + this.personService.getName().middleInit
                      + ' '
                      + this.personService.getName().lastName;
          
          



          this.subType = this.personService.getName().subType;
      }





  
}
