import { MessageService } from 'primeng/api';
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

  form! : FormGroup;
  invalid! : string

  constructor (
    private formB : FormBuilder,
    private apiService : ApiService,
    private storageService : StorageService,
    private messageService : MessageService
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

  setErroShakeX() {
    const _element = document.querySelector("#log-panel");
    _element?.classList.add('animate__shakeX');
    _element?.addEventListener("animationend", _ => {
      console.log("end");
      this.invalid = ""
    })
  }

  login() {
    const log : ILog = {...this.form.value}
    this.apiService.log(log).subscribe(
      (result : ILog) => {
        if (!result.email) {
          this.messageService.add({severity : "error", summary : "Usuário inexistente!", detail : "Este usuário não está registrado."});
          this.invalid = "animate_animated animate__shakeX"
        } else {
          if (result.password) {
            this.messageService.add({severity: "success", summary : "Login realizado com sucesso!", detail : "Seja bem vindo novamente."})
            this.storageService.sendToLocalStorage("logged", true)
            location.assign("/main");
          } else {
            this.messageService.add({severity : "error", summary : "Senha incorreta!", detail : "Senha incorreta, tente novamente."});
            this.invalid = "animate_animated animate__shakeX"
          }
        } setTimeout(() => this.invalid = "", 1000);
      }
    )
  }
}
