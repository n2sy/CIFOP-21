import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { FirstService } from '../services/first.service';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [ListPersonnesService]
})
export class CvComponent implements OnInit {
  listPersonne : Personne[] = [];
  persSelected : Personne;
  
  constructor(private persService : ListPersonnesService) {
    //console.log("Appel du constructeur");
    
   }

  ngOnInit(): void {
    //console.log("Appel de ngOnInit");
    //this.fService.showMsg();
    this.listPersonne = this.persService.getListPersonnes();
    
  }

  RecupPers(p) {
    this.persSelected = p;
  }

  addNewPerson() {
    this.listPersonne.push(
      new Personne(1, "NEW", "PERSON", 35, "enseignant", "nidhal.jpg"),
    )
  }

  showList() {
    console.log(this.listPersonne);
    
  }

}
