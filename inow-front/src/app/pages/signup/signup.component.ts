import { ActivatedRoute, Router, Routes } from '@angular/router';
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
    private router : Router,
    private formB : FormBuilder,
    private apiService : ApiService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.formB.group({
      name : ["", Validators.required],
      lastName : ["", Validators.required],
      phone: ["", Validators.required],
      email : ["", Validators.compose([Validators.required, Validators.email])],
      cpf : ["", Validators.compose([Validators.required])],
      password : ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^([a-zA-Z0-9_@*#$]*)$/)]) ],
      // re_password : ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(/^([a-zA-Z0-9_@*#$]*)$/)])]
    })
    this.form.get("cpf")?.valueChanges.subscribe(
      changed => this.validateCPF(changed)
    )
  }

  validateCPF(cpf : string) {
    cpf = this.cleanUpProp(cpf, [".","-"])
    if (cpf.length === 11) {
      const cpfArray = []
      for (let char of cpf) cpfArray.push(+char)

      let soma = 0, soma2 = 0
      for (let i = 0; i < 9; i++) soma += cpfArray[i] * (10-i)
      let verificador1 = 11 - (soma%11)
      verificador1 = verificador1 > 9 ? 0 : verificador1
      for (let i = 0; i < 10; i++) soma2 += cpfArray[i] * (11-i)
      let verificador2 = 11 - (soma2%11)
      verificador2 = verificador2 > 9 ? 0 : verificador2

      return (+cpf[9] === verificador1) && (+cpf[10] === verificador2)
    }
    return false;
  }

  cleanUpProp(prop : string, garbageChars : string[]) {
    garbageChars.forEach(garbage => prop = prop.replaceAll(garbage, ""))
    return prop;
  }

  signUp() {
    const user : IUser = {...this.form.value};
    user.cpf = this.cleanUpProp(user.cpf, [".", "-"]);
    user.phone = this.cleanUpProp(user.phone, [".","-","(",")"," "]);

    console.log(user)

    this.apiService.sendToApi({action : "createUser", body : user}).subscribe(
      (result)  => {
        if (result) this.router.navigate(["login"])
      }
    )

  }

}
