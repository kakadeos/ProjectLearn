import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(loginForm : NgForm) {
    //console.log(loginForm.value.emailAddress+" "+ loginForm.value.password);
    this.AuthenticationService.loginFunction(loginForm.value.emailAddress, loginForm.value.password);
  }
}
