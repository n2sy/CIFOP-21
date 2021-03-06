import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  listFonts = ['', 'Garamond', 'Phosphate', 'Verdana'];
  bgColor;
  cl;
  size;
  font;
  constructor() { }

  ngOnInit(): void {
  }

  changeSize(i) {
    // console.log(i);
    // console.log(i.value);
    //this.size = i + 'px';
    this.size = `${i}px`;
    
  }

}
