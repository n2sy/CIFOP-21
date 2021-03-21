import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filtredPerson : Personne[];
  constructor(private persService : ListPersonnesService,
    private router : Router) { }

  ngOnInit(): void {
  }

  searchPerson(subname) {
    this.persService.getPersonBySubname(subname).subscribe(
      (result) => {
        this.filtredPerson = result;
      },
      (error) => {
        console.log("Problem with getPersonBySubname", error);  
      }
    )

  }

  goToInfos(inputSubname, id) {
    this.filtredPerson = [];
    inputSubname.value = "";
    this.router.navigate(['project', 'cv', id])

  }

}
