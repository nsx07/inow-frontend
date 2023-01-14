import { IQueryEntity } from './../core/entity';
import { INOW_API_URL } from './../env/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { ILog } from '../models/User';

@Injectable({
  providedIn: 'any'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) {}

  sendToApi(queryEntity : IQueryEntity) : Observable<any> {
    return this.http.post<any>(`${INOW_API_URL}${queryEntity.action}`, queryEntity.body).pipe(take(1))
  }

  requestFromApi(queryEntity : IQueryEntity, params? : boolean) {
    if (params)
      return this.http.post<any>(`${INOW_API_URL}${queryEntity.action}`, queryEntity.queryParameters, { params : queryEntity.httpParameters}).pipe(take(1));
    return this.http.get<any>(`${INOW_API_URL}${queryEntity.action}`).pipe(take(1));
  }

  log(log : ILog) {
    return this.http.post(`${INOW_API_URL}security/log`, log).pipe(take(1));
  }
}
