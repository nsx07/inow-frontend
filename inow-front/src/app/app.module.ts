import { ApiService } from './services/api-service.service';
//  ANGULAR-CORE
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms"
import { NgModule } from '@angular/core';
//  COMPONENTS
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  PRIME-NG
import { AccordionModule } from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import { DividerModule } from "primeng/divider"
import { ButtonModule} from "primeng/button"
import {PanelModule} from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { MenuModule} from "primeng/menu";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // PRIME-NG
    AccordionModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    PanelModule,
    CardModule,
    MenuModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
