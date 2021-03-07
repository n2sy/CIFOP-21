import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { ListAccountService } from 'src/app/services/list-account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  tabAccounts : Account[] = []
  constructor(private accServ : ListAccountService) { }

  ngOnInit(): void {
    this.tabAccounts = this.accServ.listAccounts;
  }

  changeType(i, newType) {
    this.accServ.changeAccountType(i, newType);
  }

}
