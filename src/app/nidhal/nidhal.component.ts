import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-nidhal',
  templateUrl: './nidhal.component.html',
  styleUrls: ['./nidhal.component.css']
})
export class NidhalComponent implements OnInit {
  @Input() name : string = "Kamel";
  @Input() color : string = "pink";
  hd : boolean = false;


  @Output() msg = new EventEmitter<string>();
  //@Output() msg = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert("Bonjour de la part de Mohamed !")
  }

  sendMsg() {
    this.msg.emit("C'est un message envoyé par le fils");
  }

}
