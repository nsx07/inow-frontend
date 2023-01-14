import { User } from './models/User';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from './services/api-service.service';
//  ANGULAR-CORE
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgModule, NgModuleDecorator } from '@angular/core';
//  COMPONENTS
import { SignupComponent } from './pages/signup/signup.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  PRIME-NG
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {InputNumberModule} from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';
import {SplitterModule} from 'primeng/splitter';
import { DividerModule } from "primeng/divider"
import {TabMenuModule} from 'primeng/tabmenu';
import { ButtonModule} from "primeng/button"
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import { CardModule } from 'primeng/card';

import { MenuModule} from "primeng/menu";

import { ProfileComponent } from './pages/profile/profile.component';
import { MessageService, PrimeNGConfig } from 'primeng/api';

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
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // PRIME-NG
    ProgressSpinnerModule,
    InputTextareaModule,
    InputNumberModule,
    ScrollPanelModule,
    InputMaskModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    PasswordModule,
    SplitterModule,
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
export class AppModule {

  constructor (
    private primeConfig : PrimeNGConfig
  )
  {
    primeConfig.setTranslation({
    // startsWith: string,
    // contains: string,
    // notContains: string,
    // endsWith: string,
    // equals: string,
    // notEquals: string,
    // noFilter: string,
    // lt: string,
    // lte: string,
    // gt: string,
    // gte: string,
    // is: string,
    // isNot: string,
    // before: string,
    // after: string,
    // dateIs: string,
    // dateIsNot: string,
    // dateBefore: string,
    // dateAfter: string,
    // clear: string,
    // apply: string,
    // matchAll: string,
    // matchAny: string,
    // addRule: string,
    // removeRule: string,
    // accept: string,
    // reject: string,
    // choose: string,
    // upload: string,
    // cancel: string,
    // dayNames: string[],
    // dayNamesShort: string[],
    // dayNamesMin: string[],
    // monthNames: string[],
    // monthNamesShort: string[],
    // dateFormat: string,
    // firstDayOfWeek: number,
    today: "Hoje",
    // weekHeader: string,
    weak: "Fraca",
    medium: "Médio",
    strong: "Forte",
    passwordPrompt: "Digite uma senha"
    // emptyMessage: string,
    // emptyFilterMessage: string,
    })
  }
}
