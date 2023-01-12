import { Router } from '@angular/router';
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
    private router : Router,
    private apiService : ApiService,
    private storageService : StorageService
    ) {}

  ngOnInit(): void {
     const loginInLoad = this.storageService.getFromLocalStorage("logged");

     if (loginInLoad === null || loginInLoad === undefined) {
       this.router.navigate(["signup"])
       return
      }
     if (location.href.includes("login") || location.href.includes("signup")) return
     if (!loginInLoad) this.router.navigate(["login"])
  }
}
