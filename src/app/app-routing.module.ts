import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { AdvancedOrganizationSearchComponent } from './advanced-organization-search/advanced-organization-search.component';
import { AdvancedPersonSearchComponent } from './advanced-person-search/advanced-person-search.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { SalesComponent } from './sales/sales.component';
import { PersonComponent } from './person/person.component';
import { LedgerContactComponent } from './ledger-tabs/ledger-contact/ledger-contact.component';
import { LedgerEventsComponent } from './ledger-tabs/ledger-events/ledger-events.component';
import { LedgerNotesComponent } from './ledger-tabs/ledger-notes/ledger-notes.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'Login', 
    pathMatch: 'full' 
    
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'Photographer',
        component: PhotographerComponent
      },
      { 
        path: 'Sales', 
        component: SalesComponent
      },
      {
        path: 'Advanced_Person_Search',
        component: AdvancedPersonSearchComponent
      },
      {
        path: 'Advanced_Organization_Search',
        component: AdvancedOrganizationSearchComponent
      },
      {
        path: 'Create_Person',
        component: CreatePersonComponent
      },
      {
        path:'Create_Organization',
        component: CreateOrganizationComponent
      },
      {
        path: 'Person/:uuid',
        component: PersonComponent,
        children: [
          { path: '', redirectTo: 'Contact', pathMatch: 'full' },
          { path: 'Contact', component: LedgerContactComponent},
          { path: 'Events', component: LedgerEventsComponent},
          { path: 'Notes', component: LedgerNotesComponent}
        ]
      },
    ]
  },
  { 
    path: '**', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
