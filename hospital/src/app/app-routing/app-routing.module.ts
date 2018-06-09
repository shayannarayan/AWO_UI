import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { AdminComponent } from '../admin/admin.component';
import { HospitalComponent } from '../hospital/hospital.component';
import { BloodBankComponent } from '../blood-bank/blood-bank.component';
import { DonorsComponent } from '../donors/donors.component';
import { RequestsComponent } from '../requests/requests.component';



export const routes: Routes = [
  {
    path: 'hospital',
    component: HospitalComponent
  },
  {
    path: 'bloodBank',
    component: BloodBankComponent
  },
  {
    path: 'donors',
    component: DonorsComponent
  },

  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: '',
    component: HomepageComponent
  }
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
