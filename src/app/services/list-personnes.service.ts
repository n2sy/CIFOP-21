import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonnesService {
  private listPersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 15, "développeur", "bart.jpg"),
    new Personne(3, "homer", "simpson", 60, "chef de projet")
  ];
  constructor() { }

  getListPersonnes() {
    return this.listPersonne;
  }

  getPersonneById(id) {
    return this.listPersonne.find(p => p.id == id)
  }
}
