import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private persServ : ListPersonnesService) { }

  ngOnInit(): void {
    //this.activatedRoute.snapshot.params['id']  A EVITER
    // let i = this.activatedRoute.snapshot.paramMap.get('id');
    // this.pers = this.persServ.getPersonneById(i);

    this.activatedRoute.paramMap.subscribe(
      (p: ParamMap) => {
        this.persServ.getPersonneByIdAPI(p.get('id')).subscribe(
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

  goToUpdate() {
    this.router.navigate(['/project/cv/edit', this.pers.id]);
  }

  deleteThisPerson() {
    // if(confirm('Etes-vous sur de vouloir supprimer cette personne ?'))
    //   {
    //     this.persServ.deletePerson(this.pers);
    //     this.router.navigate(['/project/cv']);
    //   }

    if(confirm('Etes-vous sur de vouloir supprimer cette personne ?'))
    {
      this.persServ.deletePersonAPI(this.pers.id).subscribe(
        (reponse) => {
          this.router.navigate(['/project/cv']);
        },
        (error) => {
          console.log("Error with deletePerson");
          
        }
      );
      
    }
  }
}
