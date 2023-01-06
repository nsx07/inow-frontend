import { IUser } from './../models/User';
export declare type Parameters = {[key : string] : string}

export interface IQueryEntity {
  action : string,
  parameters? : Parameters
}


export class queryEntity implements IQueryEntity {
  action! : string;
  parameters! : Parameters

  constructor(action : string, parameters : Parameters) {
    this.action = action;
    this.parameters = parameters;
  }
}
export class queryUser extends queryEntity {
  users! : IUser[]

  constructor(parameters : Parameters) {
    super("getUsers", parameters)
  }

}
