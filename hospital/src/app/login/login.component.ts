import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username = '';
  password = '';
  forgotpsd = '';
  hide = true;
  loginUser() {

    console.log('-- loginUser --');

    console.log('--> username: ' + this.username);
    console.log('--> password: ' + this.password);

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin']);
      // this.user.setUserLoggedIn();
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
   openDialog(): void{

   } 
}
