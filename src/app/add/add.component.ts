import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  erreur : boolean = false;

  constructor(private persService : ListPersonnesService,
    private router : Router) { }

  ngOnInit(): void {
  }

  addNewPerson(p) {
    // this.persService.addPersonne(p);
    // this.router.navigate(['/project/cv'])
    this.persService.addPersonneAPI(p).subscribe(
      (result) => {
        this.erreur = false;
        this.router.navigate(['/project/cv'])
      },
      (error) => {
        this.erreur = true;
      }
    )

  }

}
