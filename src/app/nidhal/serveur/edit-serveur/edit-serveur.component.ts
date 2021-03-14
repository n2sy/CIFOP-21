import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServeursService } from '../../list-serveurs.service';

@Component({
  selector: 'app-edit-serveur',
  templateUrl: './edit-serveur.component.html',
  styleUrls: ['./edit-serveur.component.css']
})
export class EditServeurComponent implements OnInit {
  selectedServeur : {id : number, name : string, status: string};
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private lstService : ListServeursService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        console.log(p.get('myid'));
        
       this.selectedServeur = this.lstService.getServeurById(p.get('myid'))
       //console.log(this.selectedServeur);
       
      }
    )
  }

  goToDetails() {
    this.router.navigate(['/nidhal/serveurs', this.selectedServeur.id], {queryParams: {allowEdit : 1}});
  }

}
