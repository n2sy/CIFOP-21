import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.css']
})
export class HomeProjectComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToCv() {
    this.router.navigateByUrl("/cv")
  }

  goToServers() {
    this.router.navigate(['servers']);
  }

}
