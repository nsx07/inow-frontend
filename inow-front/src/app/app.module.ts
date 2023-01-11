import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from './services/api-service.service';
//  ANGULAR-CORE
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms"
import { NgModule } from '@angular/core';
//  COMPONENTS
import { SignupComponent } from './pages/signup/signup.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  PRIME-NG
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AccordionModule } from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import { DividerModule } from "primeng/divider"
import {TabMenuModule} from 'primeng/tabmenu';

import { ButtonModule} from "primeng/button"
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { MenuModule} from "primeng/menu";
import { ProfileComponent } from './pages/profile/profile.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // PRIME-NG
    ProgressSpinnerModule,
    AccordionModule,
    InputTextModule,
    DividerModule,
    TabMenuModule,
    ButtonModule,
    ToastModule,
    PanelModule,
    CardModule,
    MenuModule
  ],
  providers: [
    StorageService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
