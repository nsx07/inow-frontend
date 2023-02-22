import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  body! : string
  data!: any;
  url : string = "http://52.67.212.25:8080/api/v1/";
  methods = [
    {id : 0, name : "GET", method : "GET"},
    {id : 1, name : "DELETE", method : "DELETE"},
    {id : 2, name : "PUT", method : "PUT"},
    {id : 3, name : "POST", method : "POST"}
  ]
  selectedMethod! : string

  searchData() {

    if (this.url) {
      console.debug(this.body)
      try {
        fetch(this.url, {method : this.selectedMethod, body : this.selectedMethod != "GET" && this.selectedMethod != "DELETE" ? this.body : null  , headers : new Headers()})
        .then(response => response.ok ? response.text() : response.statusText)
        .then((data) => this.data = data)
        .catch(err => console.log(err))
      } catch (error) {
        console.log(error)
      }
    }
    else this.data = "Digite uma url válida"

  }

}
