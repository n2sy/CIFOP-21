import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
  bg = "pink";
  cl = "grey";
  class1 : boolean = false;
  class2 : boolean = false;
  class3 : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  modifBg() {
    this.bg = "yellow";
  }

  switchClass() {
    if(this.class1) {
      this.class1 = false;
      this.class2 = true;
    }
    else if(this.class2) {
      this.class2 = false;
      this.class3 = true;
    }
    else {
      this.class3 = false;
      this.class1 = true;
    }
  }

}
