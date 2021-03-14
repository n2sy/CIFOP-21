import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = "https://jsonplaceholder.typicode.com/usssers"
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.link).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log('Error with the API'); 
      },
      () => {
        console.log("That's all !!!");
        
      }
    )
  }

}
