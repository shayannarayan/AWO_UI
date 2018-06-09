import { DonorService } from './../services/donor.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { donor } from '../models/donor.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   
  minDate = new Date(1970, 0, 1);
  maxDate = new Date();
  bloodgroup = [
    'A+','A-','B+','B-','O+','O-','AB+','AB-'

  ];
  genders = [
    'MALE','FEMALE','OTHERS'
  ];
 
  

  donor: donor = {
    firstName: null,
    lastName: null,
    middleName: null,
    dateOfBirth: null,
    bloodGroup: null,
    age: null,
    street: null,
    gender: null,
    city: null,
    area: null,
    pincode: null,
    emailID: null,
    password: null,
    confirmPassword: null,
    
    phoneNumber: null



  };
  gender=['male','female'];
  constructor(private donorService: DonorService ) { }

  ngOnInit() {
  }
  saveDonor(donorForm: any): void
  {
    console.log(donorForm);
    this.donorService.saveReg(donorForm);
  }

}
