import { StorageService } from '../../services/storage.service';
import { IUser, ILog } from './../../models/User';
import { ApiService } from './../../services/api-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form! : FormGroup


  constructor (
    private formB : FormBuilder,
    private apiService : ApiService,
    private storageService : StorageService
  ) {}

  ngOnDestroy(): void {
    if (this.storageService.getFromSession("logged")) {
      this.storageService.sendToLocalStorage("logged", true);
    }
  }

  get isLogged() {
    return this.storageService.getFromSession("logged");
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.formB.group({
      email : ["", Validators.compose([Validators.required, Validators.email])],
      password : ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(/^([a-zA-Z0-9_@*#$]*)$/)])]
    })
  }

  login() {
    const log : ILog = {...this.form.value}
    console.log(log);
    this.apiService.log(log).subscribe(
      (result) => {
        if (result) {
          console.log(result);
          this.storageService.sendToSession('logged', true);
          location.assign("/main")
        }
      }
    )
  }
}
