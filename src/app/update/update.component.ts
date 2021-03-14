import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private persService : ListPersonnesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.persService.getPersonneByIdAPI(p.get('id')).subscribe(
          (pers : Personne) => {
            this.pers = pers
          },
          (error) => {
            console.log("Error with getPersonneById");       
          }
        )
      },

      (error) => {
        console.log("Error with paramMap"); 
      }
    )
  }

  updateThisPerson() {
    //this.persService.updatePersonne(this.pers);
    this.persService.updatePersonneAPI(this.pers).subscribe(
      (response) => {
        this.router.navigate(['/project/cv']);
      },
      (error) => {
        console.log("Error with updatePersonne");
        
      }
    )
    
  }

}
