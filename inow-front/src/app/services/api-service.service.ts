import { IQueryEntity } from './../core/entity';
import { INOW_API_URL } from './../env/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ILog } from '../models/User';

@Injectable({
  providedIn: 'any'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) {}

  sendToApi(queryEntity : IQueryEntity) : Observable<any> {
    return this.http.post(`${INOW_API_URL}${queryEntity.action}`, queryEntity.parameters).pipe(take(1))
  }

  log(log : ILog) {
    return this.http.post<ILog>(`${INOW_API_URL}security/log`, log).pipe(take(1));
  }

  requestFromApi(queryEntity : IQueryEntity) {
    return this.http.get(`${INOW_API_URL}${queryEntity.action}`, {params : queryEntity.parameters}).pipe(take(1));
  }
}
