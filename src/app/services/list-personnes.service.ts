import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonnesService {
  // private listPersonne : Personne[] = [
  //   new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
  //   new Personne(2, "bart", "simpson", 15, "développeur", "bart.jpg"),
  //   new Personne(3, "homer", "simpson", 60, "chef de projet")
  // ];

  private listPersonne : Personne[] = [];
  link = "http://localhost:3000/api/personnes"
  
  constructor(private http : HttpClient) { }

  getListPersonnes() {
    return this.listPersonne;
  }

  getListPersonnesAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getPersonneById(id) {
    return this.listPersonne.find(p => p.id == id)
  }

  getPersonneByIdAPI(id) :Observable<Personne> {
    return this.http.get<Personne>(`${this.link}/${id}`)
    
  }

  addPersonne(newP) {
    newP.id = this.listPersonne[this.listPersonne.length - 1].id + 1;
    this.listPersonne.push(newP);    
  }

  updatePersonne(p) {
    let pers = this.getPersonneById(p.id)
    let i = this.listPersonne.indexOf(pers);
    this.listPersonne[i] = p;

  }

  updatePersonneAPI(p) {
    return this.http.put(`${this.link}/${p.id}`, p)
  }

  deletePerson(p) {
    let i = this.listPersonne.indexOf(p);
    this.listPersonne.splice(i, 1);
  }

  deletePersonAPI(id) {
    return this.http.delete(`${this.link}/${id}`);

  }
}
