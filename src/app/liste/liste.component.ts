import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  lstPersonne : Personne[];
  @Output() sendPersToCv = new EventEmitter<Personne>();
  constructor(private persService : ListPersonnesService) { }

  ngOnInit(): void {
    this.lstPersonne = this.persService.getListPersonnes();
  }

  RecupePers(p) {
    this.sendPersToCv.emit(p);
  }

  showList() {
    console.log(this.lstPersonne);
    
  }

}
