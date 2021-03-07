import { Component, OnInit } from '@angular/core';
import { Serveur } from '../models/serveur';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css']
})
export class ManageServersComponent implements OnInit {
  listServeurs : Serveur[] = [
    new Serveur("Development Server", "small", "critical", new Date(2020, 6, 4)),
    new Serveur("Testing Development Server", "medium", "stable", new Date(2021, 6, 4)),
    new Serveur("Production Server", "large", "offline", new Date(2019, 3, 4)),
    new Serveur("Nidhal Server", "small", "stable", new Date(2020, 1, 14))
  ];

  selectedStatus : string = "";

  myPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("KAMEL")
    },3000)
  })

  constructor() { }

  ngOnInit(): void {
  }

  addClass(status) {
    return {
      "list-group-item-success" : status == "stable",
      "list-group-item-danger" : status == "critical",
      "list-group-item-warning" : status == "offline"
    }


  }

  addServer() {
    this.listServeurs.push(
      new Serveur("New New Server", "small", "stable", new Date(2020, 1, 14))
    )
  }

}
