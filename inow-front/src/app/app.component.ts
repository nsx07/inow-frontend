import { StorageService } from './services/storage.service';
import { ApiService } from './services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[ApiService]
})
export class AppComponent implements OnInit {
  constructor(
    private apiService : ApiService,
    private storageService : StorageService
    ) {}

  ngOnInit(): void {

     const loginInLoad = this.storageService.getFromSession("logged");

     if (location.href.includes("login") || location.href.includes("signup")) return

     if (loginInLoad === null) location.assign("/signup")



     if (!loginInLoad) location.assign("/login");



  }
}
