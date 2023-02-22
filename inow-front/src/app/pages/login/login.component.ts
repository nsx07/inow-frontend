import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StorageService } from '../../services/storage.service';
import { IUser, ILog, LogOptions } from './../../models/User';
import { ApiService } from './../../services/api-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form! : FormGroup;
  invalid! : string;
  inputTypes! : any[]

  constructor (
    private formB : FormBuilder,
    private apiService : ApiService,
    private storageService : StorageService,
    private messageService : MessageService,
    private router : Router
  ) {}

  ngOnDestroy(): void {
    if (this.storageService.getFromSession("logged")) {
      this.storageService.sendToLocalStorage("logged", true);
    }
  }

  get isLogged() {
    return this.storageService.getFromSession("logged");
  }

  getInputName() {
    return this.inputTypes.find(type => type.type === this.form.get("inputType")?.value)?.name
  }

  ngOnInit(): void {
    this.inputTypes = [
      {name  : "Email", code : "email", type : LogOptions.EMAIL},
      {name  : "CPF", code : "cpf", type : LogOptions.CPF},
      {name  : "Celular", code : "phone", type : LogOptions.PHONE}
    ]

    this.setForm();
  }

  setForm() {
    this.form = this.formB.group({
      inputType : ["", Validators.required],
      input : ["", Validators.compose([Validators.required])],
      password : ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(/^([a-zA-Z0-9_@*#$]*)$/)])]
    })
  }

  setErroShakeX() {
    const _element = document.querySelector("#log-panel");
    _element?.classList.add('animate__shakeX');
    _element?.addEventListener("animationend", _ => this.invalid = "")
  }

  login() {
    const log : ILog = {...this.form.value}

    if (log.inputType === null) {
      throw new Error('informe o tipo de login')
    }

    this.apiService.log(log).subscribe(
      (result : any) => {

        if (result?.status && result.status > 220) {
          this.messageService.add({severity: "error", summary : "Erro interno!", detail : "Houve um erro interno"})
          return;
        } result = result.log;

        if (!result.input) {
          this.messageService.add({severity : "error", summary : "Usuário inexistente!", detail : "Este usuário não está registrado."});
          this.invalid = "animate_animated animate__shakeX"
        } else {
          if (result.password) {
            this.messageService.add({severity: "success", summary : "Login realizado com sucesso!", detail : "Seja bem vindo novamente."})
            this.storageService.sendToLocalStorage("logged", true).sendToLocalStorage("id", result.id)

            this.router.navigate(["main"]);
          } else {
            this.messageService.add({severity : "error", summary : "Senha incorreta!", detail : "Senha incorreta, tente novamente."});
            this.invalid = "animate_animated animate__shakeX"
          }
        } setTimeout(() => this.invalid = "", 1000);
      },
      (err) => this.messageService.add({severity: "error", summary : "Erro interno!", detail : "Houve um erro interno"})

    )
  }



}
