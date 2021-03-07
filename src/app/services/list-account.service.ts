import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class ListAccountService {
  listAccounts = [
    new Account(1, "Nidhal Account", "active"),
    new Account(1, "Kamel Account", "inactive")
  ]
  constructor() { }

  addAccount(name, type) {
    let id = this.listAccounts.length + 1;
    this.listAccounts.push(
      new Account(id, name, type)
    )
  }

  changeAccountType(indice, newType) {
    this.listAccounts[indice].type = newType;
  }
}
