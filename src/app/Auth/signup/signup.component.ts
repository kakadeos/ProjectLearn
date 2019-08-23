import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private AuthenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  onSignup(signupForm : NgForm) {
    this.AuthenticationService.signupFunction(signupForm.value.emailAddress, signupForm.value.password);
  }

}
