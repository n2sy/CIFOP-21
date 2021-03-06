import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listPersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 15, "développeur", "bart.jpg"),
    new Personne(3, "homer", "simpson", 60, "chef de projet", "homer.jpg")
  ];
  persSelected : Personne;
  
  constructor() {
    console.log("Appel du constructeur");
    
   }

  ngOnInit(): void {
    console.log("Appel de ngOnInit");
    
  }

  RecupPers(p) {
    this.persSelected = p;
  }

}
