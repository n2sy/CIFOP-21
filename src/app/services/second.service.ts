import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }

  infos() {
    console.log("Je suis le 2eme service");
    
  }
}
