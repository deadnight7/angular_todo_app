import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'dead.night7@gmail.com';
  password = 'Test!123';
  constructor() { }

  handleLogin() {
    console.log(this.userName + ' and ' + this.password);
  }

  ngOnInit() {
  }

}
