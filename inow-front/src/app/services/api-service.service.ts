import { IQueryEntity, queryEntity } from './../core/entity';
import { INOW_API_URL, HTTP_OPTIONS } from './../env/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) {}

  sendToApi(queryEntity : IQueryEntity) : Observable<any> {
    return this.http.post(`${INOW_API_URL}${queryEntity.action}`, queryEntity.parameters, {headers : HTTP_OPTIONS.headers});
  }

  requestFromApi(queryEntity : IQueryEntity) {
    return this.http.get(`${INOW_API_URL}${queryEntity.action}`, {params : queryEntity.parameters});
  }
}
