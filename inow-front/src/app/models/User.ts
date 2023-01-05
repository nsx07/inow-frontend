export interface IUser {
  id : number,
  name : string,
  lastName : string,
  cpf : string,
  email : string,
}

export class User {

  user! : IUser

  constructor(user : IUser) {
    this.user = user;
  }
}
