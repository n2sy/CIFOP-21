import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class ListRecruesService {
  private listRecrues : Personne[] = [];
  constructor() { }

  getListRecrues() {
    return this.listRecrues;
  }

  addRecrue(newRecrue : Personne) {
    if(this.listRecrues.find(p => p.id == newRecrue.id ))
      alert('Cette personne a déjà été recrutée')
    else 
      this.listRecrues.push(newRecrue);
  }
}
