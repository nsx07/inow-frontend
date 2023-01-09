import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  sendToSession(key : string, value : any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getFromSession(key : string) {
    const item = sessionStorage.getItem(key)
    return item ? JSON.parse(item) : null;
  }

  sendToLocalStorage(key : string, value : any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key : string) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null;
  }
}
