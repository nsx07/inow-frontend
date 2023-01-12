import { HttpParams } from '@angular/common/http';
import { IUser } from './../models/User';
export interface Parameters {
  colum : string,
  value : string
}

export interface QueryParameters {
  table : string,
  query : Array<Parameters>,
  fields? : Array<string>
}

export interface IQueryEntity {
  action : string,
  httpParameters? : HttpParams,
  queryParameters? : QueryParameters,
  body? : any
}


export class queryEntity implements IQueryEntity {
  parameters! : Parameters;
  action! : string;
  body : any;

  constructor(action : string, parameters? : Parameters, body? : any) {
    this.action = action;
    if (parameters) this.parameters = parameters
    if (body) this.body = body
  }
}
export class queryUser extends queryEntity {
  users! : IUser[]

  constructor(parameters : Parameters) {
    super("getUsers", parameters)
  }

}
