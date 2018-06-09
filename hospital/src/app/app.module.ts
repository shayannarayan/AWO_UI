import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DonorService } from './services/donor.service';
import { routes } from '../app/app-routing/app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { AdminComponent } from './admin/admin.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmValidatorDirective } from './shared/confirm-validator.directive';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HospitalComponent } from './hospital/hospital.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { DonorsComponent } from './donors/donors.component';
import { RequestsComponent } from './requests/requests.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AdminComponent,
    LoginComponent,
    HomepageComponent,
    HospitalComponent,
    BloodBankComponent,
    DonorsComponent,
    RequestsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule, 
    MatCheckboxModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatRadioModule, 
    FormsModule, 
    MatGridListModule,
    MatIconModule,
    MatSidenavModule

  ],
  providers: [DonorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
