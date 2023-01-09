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
import { AccordionModule } from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import { DividerModule } from "primeng/divider"
import {TabMenuModule} from 'primeng/tabmenu';
import { ButtonModule} from "primeng/button"
import {PanelModule} from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { MenuModule} from "primeng/menu";
import { ProfileComponent } from './pages/profile/profile.component';

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
    AccordionModule,
    InputTextModule,
    DividerModule,
    TabMenuModule,
    ButtonModule,
    PanelModule,
    CardModule,
    MenuModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
