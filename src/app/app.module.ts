import { LedgerComponent } from './ledger/ledger.component';

import { NgModule } from '@angular/core';
import { SalesAuthGuard } from './services/sales-auth-guard.service';
import { DataShareService } from './services/data-share.service';
import { AuthService } from './services/auth.service';

import { StateService } from './services/state.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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

import { PersonService } from './services/person.service';

import { LedgerNotesComponent } from './ledger-tabs/ledger-notes/ledger-notes.component';
import { LedgerContactComponent } from './ledger-tabs/ledger-contact/ledger-contact.component';
import { LedgerEventsComponent } from './ledger-tabs/ledger-events/ledger-events.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HttpErrorInterceptor } from './http-error-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { DashboardService } from './Services/dashboard.service';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { PhotographerAuthGuard } from './services/photographer-auth-guard.service';
import { EntityService } from './services/entity.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { PopupContactComponent } from './ledger-popup/popup-contact/popup-contact.component';
import { PopupNotesComponent } from './ledger-popup/popup-notes/popup-notes.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PopupEmailComponent } from './ledger-popup/popup-email/popup-email.component';
import { PopupAddressComponent } from './ledger-popup/popup-address/popup-address.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { NetworkInterceptor } from './interceptors/network.interceptor';




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
    LedgerContactComponent,
    LedgerEventsComponent,
    LedgerNotesComponent,
    LoginComponent,
    DashboardComponent,
    AdministratorComponent,
    LedgerComponent,
    PopupContactComponent,
    PopupNotesComponent,
    PopupEmailComponent,
    PopupAddressComponent


  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    JwtModule,
    MatIconModule,
    DragDropModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DashboardService,
    StateService,
    PhoneTypeService,
    PersonService,
    AuthService,
    AuthGuard,
    SalesAuthGuard,
    AdminAuthGuard,
    PhotographerAuthGuard,
    EntityService,
    DragDropModule,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
    DataShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
