import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  itemsHeader = new Array();
  itemsNav = new Array();


  constructor(
    private storageService : StorageService
  ) {}

  ngOnInit(): void {
    this.itemsHeader = [
        {
          label: 'Perfil',
          items: [{
            label: 'Acessar perfil',
            icon: 'pi pi-user',
            command: () => this.toProfile()
          },
          {
            label: 'Sair',
            icon: 'pi pi-arrow-circle-down',
            command: () => this.logout()
          }]
        }
      ];

  }
  toProfile() {
    location.assign("/profile");
  }

  logout() {
    this.storageService.sendToLocalStorage("logged", false);
    this.storageService.sendToLocalStorage("id", null)
    // this.storageService.sendToSession("logged", false);
    location.assign("*")
  }
}
