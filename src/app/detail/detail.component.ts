import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() selectedPers : Personne;
  constructor(private recService : ListRecruesService) { }

  ngOnInit(): void {
  }

  addNewRecrue() {
    this.recService.addRecrue(this.selectedPers);
  }

}
