import { ApiService } from './api-service.service';
import { IUser } from './../models/User';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private apiService : ApiService
  ) { }

  getUserInfo(id : number) {
    return new Promise<IUser>((resolve, reject) => {
      this.apiService.requestFromApi<IUser>({action : "getUserById"+id}).subscribe(
        result => {
          if (result) {
            resolve(result)
          } else {
            reject(false)
          }
        }
      )
    })
  }
}
