import { Component, OnInit } from '@angular/core';
import { ListServeursService } from '../list-serveurs.service';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.css']
})
export class ServeurComponent implements OnInit {
  tab = [];
  constructor(private listServeurs : ListServeursService) { }

  ngOnInit(): void {
    this.tab = this.listServeurs.getListServeurs();
  }

}
