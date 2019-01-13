import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'dead.night7@gmail.com';
  password = '';
  errorMessage = 'Invalid Credentials';
  isInvalidLogin = false;
  constructor(private router: Router ) { }

  handleLogin() {
    // console.log(this.userName + ' and ' + this.password);
    if (this.userName === 'dead.night7@gmail.com' && this.password === 'admin') {
      this.isInvalidLogin = false;
      this.router.navigate(['welcome', this.userName]);
    } else {
      this.isInvalidLogin = true;
    }
  }

  ngOnInit() {
  }

}
