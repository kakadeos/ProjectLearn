import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/Auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private isUserAuthorized : boolean = false;
  private userAuthSub : Subscription; 
  constructor(private AuthenticationService : AuthenticationService) { }

  ngOnInit() {
    this.userAuthSub = this.AuthenticationService.AuthorizedUserSub.subscribe((userAuth)=> {
      this.isUserAuthorized = userAuth;
    });
    console.log(this.isUserAuthorized);
  }

  onLogout() {
      this.AuthenticationService.logoutFunction();
  }

  ngOnDestroy() {
    this.userAuthSub.unsubscribe();
  }
}
