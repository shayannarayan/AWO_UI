import { Injectable } from '@angular/core';

//import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { donor } from '../models/donor.model';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private donorURL = 'awo/user';
  private headers = new Headers({'Content-Type' : 'application/json'});
  
  constructor(private http: Http) { }

   //this registering user method is used for integrating with backend code
  public saveReg = function(donor: donor)
  {
    console.log(donor);
    return this.http.post( this.donorURL, JSON.stringify(donor), { headers: this.headers}).toPromise().catch(this.handleError);
  }

  private handleError(error: any)
  {
    console.error("Error", error);
    return Promise.reject(error.message || error);
  }

}
