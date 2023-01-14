import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  data!: any;
  url : string = "http://localhost:8080/api/v1";
  methods = [
    {id : 0, name : "GET", method : "GET"},
    {id : 1, name : "PUT", method : "PUT"},
    {id : 2, name : "DELETE", method : "DELETE"},
    {id : 3, name : "POST", method : "POST"}
  ]
  selectedMethod! : string

  searchData() {

    if (this.url) fetch(this.url, {method : this.selectedMethod})
      .then(response => response.ok ? response.text() : response.statusText)
        .then((data) => this.data = data)
      .catch()
    else this.data = "Digite uma url válida"

  }

}
