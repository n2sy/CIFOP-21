import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServeursService } from '../../list-serveurs.service';

@Component({
  selector: 'app-detail-serveur',
  templateUrl: './detail-serveur.component.html',
  styleUrls: ['./detail-serveur.component.css']
})
export class DetailServeurComponent implements OnInit {
  myServeur;
  hd : boolean;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private lstService : ListServeursService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
       this.myServeur = this.lstService.getServeurById(p.get('myid'))
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (q) => {
        this.hd = q['allowEdit']==1 ? false : true;
      }
    )
  }

  goToEdit() {
    this.router.navigate(['nidhal', 'serveurs', this.myServeur.id, 'edit'])

  }

}
