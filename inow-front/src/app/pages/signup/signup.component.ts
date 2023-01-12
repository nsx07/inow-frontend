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
      lastname : ["", Validators.required],
      phone: ["", Validators.required],
      email : ["", Validators.compose([Validators.required, Validators.email])],
      cpf : ["", Validators.compose([Validators.required])],
      password : ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(/^([a-zA-Z0-9_@*#$]*)$/)]) ],
      // re_password : ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(/^([a-zA-Z0-9_@*#$]*)$/)])]
    })
    this.form.get("cpf")?.valueChanges.subscribe(
      changed => this.validateCPF()
    )
  }

  validateCPF() {
    // if type == 'cpf'
    //     cpf = []
    //     for i in 0..@key.length-1
    //         cpf.append(@key[i].to_i)
    //     end
    //     soma = 0
    //     for cont in (0..8) do
    //         soma += cpf[cont] * (10-cont)
    //     end
    //     verificador1 = 11 - (soma%11)
    //     verificador1 = 0 if verificador1 > 9
    //     soma2 = 0
    //     for cont in (0..9) do
    //         soma2 += cpf[cont] * (11-cont)
    //     end
    //     verificador2 = 11 - (soma2%11)
    //     verificador2 = 0 if verificador2 > 9
    //     return true if type == "cpf" && @key[9].to_i == verificador1 && key[10].to_i == verificador2

    const cpf : string= this.form.get("cpf")?.value;

    console.log((this.cleanUpProp(cpf, [".","-"])))
  }

  cleanUpProp(prop : string, garbageChars : string[]) {
    garbageChars.forEach(garbage => prop = prop.replaceAll(garbage, ""))
    return prop;
  }

  signUp() {
    const user : IUser = {...this.form.value}

    user.cpf = this.cleanUpProp(user.cpf, [".", "-"]);
    user.phone = this.cleanUpProp(user.phone, [".","-","(",")"," "])


    console.log(user)

    this.apiService.sendToApi({action : "createUser", body : user}).subscribe(
      (result)  => {
        if (result) {
         this.router.navigate(["login"])

        }
      }
    )

  }

}
