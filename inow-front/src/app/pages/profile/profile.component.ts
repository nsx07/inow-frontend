import { ApiService } from './../../services/api-service.service';
import { StorageService } from 'src/app/services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = {name : ""}

  constructor(
    private storage : StorageService,
    private apiService : ApiService
  ) {}

  ngOnInit(): void {

    this.apiService.requestFromApi({action : "internal/getInfo", queryParameters : {table : "user", fields : ["name", "lastname"] , query : [{colum : "email",value : this.storage.getFromLocalStorage("email")}]}}, true)
      .subscribe(
        (result : any) => {
          console.log(result)
          this.profile.name = `${result[0].name} ${result[0].lastname}`
        }
      )

  }
}
