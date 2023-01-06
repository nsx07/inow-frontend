import { Parameters } from 'src/app/core/entity';
import { IUser, ILog } from './../../models/User';
import { ApiService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form! : FormGroup

  constructor (
    private formB : FormBuilder,
    private apiService : ApiService
  ) {}

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
    this.apiService.log(log).subscribe(
      (result) => {
        console.log(result)
        if (result) location.assign("/main")
      }
    )
  }
}
