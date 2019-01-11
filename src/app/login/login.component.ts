import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  handleLogin() {
    // console.log(this.userName + ' and ' + this.password);
    if (this.userName === 'dead.night7@gmail.com' && this.password === 'admin') {
      this.isInvalidLogin = false;
    } else {
      this.isInvalidLogin = true;
    }
  }

  ngOnInit() {
  }

}
