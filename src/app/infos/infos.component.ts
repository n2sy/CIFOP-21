import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    private persServ : ListPersonnesService) { }

  ngOnInit(): void {
    //this.activatedRoute.snapshot.params['id']  A EVITER
    // let i = this.activatedRoute.snapshot.paramMap.get('id');
    // this.pers = this.persServ.getPersonneById(i);

    this.activatedRoute.paramMap.subscribe(
      (p: ParamMap) => {
        this.pers = this.persServ.getPersonneById(p.get('id'))
        

      }
    )
  }

}
