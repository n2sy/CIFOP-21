import { Component, OnInit } from '@angular/core';
import { ListAccountService } from '../../services/list-account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  typeAccounts = ['', 'active', 'inactive', 'unknown'];
  name : string;
  type : string;
  constructor(private accService : ListAccountService) { }

  ngOnInit(): void {
  }

  addNewAccount() {
    this.accService.addAccount(this.name, this.type);
  }

}
