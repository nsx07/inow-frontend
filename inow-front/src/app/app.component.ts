import { INOW_API_URL } from './env/enviroment';
import { ApiService } from './services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[ApiService]
})
export class AppComponent implements OnInit {
  constructor(private apiService : ApiService) {}

  ngOnInit(): void {
    this.apiService.requestFromApi({ action: "getUsers"}).subscribe(//, parameters : {id : "1", name: "Felipe", email : "felipe@pires.com"}
      (users) => {
        console.log(users)
      }
    )

  }
}
