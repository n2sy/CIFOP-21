import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() pers : Personne;

  @Output() sendPers = new EventEmitter<Personne>();
  constructor() { }

  ngOnInit(): void {
  }

  sendSelectedPers() {
    this.sendPers.emit(this.pers)
  }

}
