import { IUser } from './../../models/User';
import { QueryService } from './../../services/query.service';
import { ApiService } from './../../services/api-service.service';
import { StorageService } from 'src/app/services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile! : IUser

  constructor(
    private storage : StorageService,
    private queryService : QueryService
  ) {}

  async ngOnInit() {
    await this.queryService.getUserInfo(this.storage.getFromLocalStorage("id"))
              .then(profile => this.profile = profile)
    console.log(this.profile)
  }
}
