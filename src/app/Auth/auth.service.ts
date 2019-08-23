import { Injectable } from '@angular/core';
import { Authentication } from './auth.model';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private AuthCredential: Authentication;
    private isAuthenticated: boolean = false;
    private messageResponse: string;
    public AuthorizedUserSub = new Subject<boolean>();

    constructor(private matSnackbarService: MatSnackBar,
        private routingService: Router,
        private http: HttpClient) { }

    loginFunction(emailAddress: string, password: string) {
        this.AuthCredential = {
            emailAddress: emailAddress,
            password: password
        }

        this.http.post("http://localhost:3000/api/user/login", this.AuthCredential).subscribe(
            (response)=> {
                this.isAuthenticated = true;
                this.AuthorizedUserSub.next(true);
                this.routingService.navigate(['/dashboard']);
        });
    }

    signupFunction(emailAddress: string, password: string) {
        this.AuthCredential = {
            emailAddress: emailAddress,
            password: password
        }
        this.http.post<{ message: string }>('http://localhost:3000/api/user/signup', this.AuthCredential).subscribe(
            (response) => {
                this.messageResponse = response.message;
                this.matSnackbarService.open(this.messageResponse, null, { duration: 5000 });
                this.routingService.navigate(['/login']);
            }
        );
    }

    getIsAuthenticated() {
        return this.isAuthenticated;
    }

    logoutFunction() {
        this.AuthorizedUserSub.next(false);
        this.matSnackbarService.open("Thanks for using our Application. Come back soon.", null, { duration: 5000 });
        this.routingService.navigate(['/']);
    }
}  