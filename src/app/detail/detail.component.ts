import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() selectedPers : Personne;
  constructor(private recService : ListRecruesService,
    private router : Router) { }

  ngOnInit(): void {
  }

  addNewRecrue() {
    this.recService.addRecrue(this.selectedPers);
  }

  goToInfos() {
    this.router.navigate(['cv', this.selectedPers.id])
  }

}
