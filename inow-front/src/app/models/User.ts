export interface ILog {
  email : string,
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
