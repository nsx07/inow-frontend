export enum LogOptions {
  "CPF" = 1,
  "EMAIL" = 2,
  "PHONE" = 3
}

export interface ILog {
  input : string,
  inputType : LogOptions
  password : string,
  status? : string | number
}
export interface IUser {
  id : number,
  name : string,
  lastName : string,
  cpf : string,
  phone : string,
  email : string,
}

export class User {

  user! : IUser

  constructor(user : IUser) {
    this.user = user;
  }
}
