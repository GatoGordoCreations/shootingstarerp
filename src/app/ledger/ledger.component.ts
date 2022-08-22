import { Person } from './../person';
import { EntityService } from './../services/entity.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';
import { PersonService } from '../services/person.service';
import { Observable } from 'rxjs';
import { getLocaleExtraDayPeriodRules } from '@angular/common';


@Component({
  selector: 'ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private personService: PersonService,
    private orgService: OrganizationService,
    private entityService: EntityService) { }

  

  tab_selector: String = "Customer";


  name = 'Unknown';
  id: number;
  
  subType = 'Unknown';
  entity_type: string = 'Unknown';
  ledger_tab = 'null';


    

  ngOnInit(): void {  

    
    
    
  
    this.route.queryParams
      .subscribe( params  => {
        this.id = +params['id'];

        //load Contact Route
        this.router.navigate(['/Dashboard/Ledger/Contact'], { queryParamsHandling: 'preserve' });
        
        //populate Entity Type
        this.entityService.getVal(this.id)
          .subscribe(
            (response) => {
              this.entity_type = response;

              switch(this.entity_type) {
                case 'Organization': {
                  this.orgService.getOrg(this.id)
                    .subscribe(
                      (orgResp) => {
                        this.name = orgResp['name'];
                        
                      }
                    );
                  this.orgService.getSubTypes(this.id)
                      .subscribe(
                        (subResp) => {
                          this.subType = subResp;
                        }
                      )
                  break;
                }

                case 'Person': {
                  this.personService.getPerson(this.id)
                    .subscribe(
                      (persResp: Person) => {
                        if(persResp.minit!=='\u0000'){
                          this.name = persResp['fname'] +  " " + persResp.minit + ". " + persResp['lname'];
                        } else { this.name = persResp['fname'] +  " " + persResp['lname']; }
                        
                        
                      }
                    )
                  this.personService.getPersonSubType(this.id)
                      .subscribe(
                        (subResp) => {
                          this.subType = subResp;
                        }
                      )
                  break;
                }
              }//end switch case
            }
          ); // end entity type


          
      });// end querry params subscribe
    
    
      
  }// end ngOnInit

}
