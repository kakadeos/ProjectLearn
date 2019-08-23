import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app-start/home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './app-inside/dashboard/dashboard.component';
import { AuthenticationService } from './Auth/auth.service';
import { AuthGuard } from './Auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './app-inside/contacts/contacts.component';
import { TaskComponent } from './app-inside/task/task.component';
import { ReportComponent } from './app-inside/report/report.component';
import { SettingComponent } from './app-inside/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    DashboardComponent,
    ContactsComponent,
    TaskComponent,
    ReportComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
