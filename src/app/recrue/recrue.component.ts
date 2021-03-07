import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recrue',
  templateUrl: './recrue.component.html',
  styleUrls: ['./recrue.component.css']
})
export class RecrueComponent implements OnInit {
  tabRecrues : Personne[] = [];
  constructor(private recService : ListRecruesService) { }

  ngOnInit(): void {
    this.tabRecrues = this.recService.getListRecrues();
  }

}
