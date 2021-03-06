import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentName = "Farah";
  constructor() { }

  ngOnInit(): void {
  }

  traitementDuPere(m) {
    console.log(m);
   
  }
}
