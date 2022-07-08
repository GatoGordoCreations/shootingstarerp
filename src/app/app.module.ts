import { DataShareService } from './services/data-share.service';
import { AuthService } from './services/auth.service';
import { LedgerContactService } from './services/ledger-contact.service';
import { StateService } from './services/state.service';
import { PrivilegesService } from './services/privileges.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navBar/nav-bar.component';
import { SalesComponent } from './sales/sales.component';
import { UserComponent } from './user/user.component';
import { CardPersonComponent } from './card-person/card-person.component';

import { CardOrganizationComponent } from './card-organization/card-organization.component';
import { CardAppointmentComponent } from './card-appointment/card-appointment.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarFooterComponent } from './navBarFooter/nav-bar-footer.component';
import { AdvancedPersonSearchComponent } from './advanced-person-search/advanced-person-search.component';
import { AdvancedOrganizationSearchComponent } from './advanced-organization-search/advanced-organization-search.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PhoneTypeService } from './services/phone-type.service';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './services/person.service';

import { LedgerNotesComponent } from './ledger-tabs/ledger-notes/ledger-notes.component';
import { LedgerContactComponent } from './ledger-tabs/ledger-contact/ledger-contact.component';
import { LedgerEventsComponent } from './ledger-tabs/ledger-events/ledger-events.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HttpErrorInterceptor } from './http-error-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    NavBarComponent,
    UserComponent,
    CardPersonComponent,
    CardOrganizationComponent,
    CardAppointmentComponent,
    PhotographerComponent,
    PrivilegesComponent,
    NotFoundComponent,
    NavBarFooterComponent,
    AdvancedPersonSearchComponent,
    AdvancedOrganizationSearchComponent,
    CreatePersonComponent,
    CreateOrganizationComponent,
    PersonComponent,
    LedgerContactComponent,
    LedgerEventsComponent,
    LedgerNotesComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    PrivilegesService,
    StateService,
    PhoneTypeService,
    PersonService,
    LedgerContactService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    DataShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
