import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { PhotographerAuthGuard } from './services/photographer-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { AdvancedOrganizationSearchComponent } from './advanced-organization-search/advanced-organization-search.component';
import { AdvancedPersonSearchComponent } from './advanced-person-search/advanced-person-search.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotographerComponent } from './photographer/photographer.component';
import { SalesComponent } from './sales/sales.component';

import { LedgerContactComponent } from './ledger-tabs/ledger-contact/ledger-contact.component';
import { LedgerEventsComponent } from './ledger-tabs/ledger-events/ledger-events.component';
import { LedgerNotesComponent } from './ledger-tabs/ledger-notes/ledger-notes.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { SalesAuthGuard } from './services/sales-auth-guard.service';
import { LedgerComponent } from './ledger/ledger.component';



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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Administrator',
        component: AdministratorComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'Photographer',
        component: PhotographerComponent,
        canActivate: [PhotographerAuthGuard]
      },
      { 
        path: 'Sales', 
        component: SalesComponent,
        canActivate: [SalesAuthGuard]
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
        path: 'Ledger',
        component: LedgerComponent,
        children: [
        //  { path: '', redirectTo: 'Contact', pathMatch: 'full' },
          { path: 'Contact', component: LedgerContactComponent},
          { path: 'Events', component: LedgerEventsComponent},
          { path: 'Notes', component: LedgerNotesComponent}
        ]
      }
      
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
