import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nidhal',
  templateUrl: './nidhal.component.html',
  styleUrls: ['./nidhal.component.css']
})
export class NidhalComponent implements OnInit {
  name : string = "Kamel";
  color : string = "pink";
  hd : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert("Bonjour de la part de Mohamed !")
  }

}
