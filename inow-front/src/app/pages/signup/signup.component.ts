import { ApiService } from './../../services/api-service.service';
import { IUser } from './../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Parameters } from 'src/app/core/entity';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form! : FormGroup

  constructor(
    private formB : FormBuilder,
    private apiService : ApiService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.formB.group({
      name : ["", Validators.required],
      lastname : ["", Validators.required],
      cpf : ["", Validators.required],
      phone: ["", Validators.required],
      email : ["", Validators.required],
      password : ["", Validators.required],
      re_password : ["", Validators.required]
    })
  }

  signUp() {
    const __user : IUser = {...this.form.value}
    const _user : any = __user
    const user : Parameters = _user

    console.log(user)

    this.apiService.sendToApi({action : "createUser", parameters : user}).subscribe(
      (result)  => console.log(result)
    )

  }

}
