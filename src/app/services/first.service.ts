import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secService : SecondService) { }

  showMsg() {
    console.log("Je suis FirstService V2");
    this.secService.infos();
    
  }
}
