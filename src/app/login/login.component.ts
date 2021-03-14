import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultSection : string = "dsen";
  myComment = "Rien à signaler";
  pass : boolean = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  seConnecter(identifiants) {
    
    if(identifiants.value.login == "nidhal@gmail.com" &&
    identifiants.value.pwd == "azerty")
     this.router.navigate(['project', 'cv'])
    else
    {
      identifiants.reset();
      this.pass = true;

    }
  }

  showForm(f) {
    console.log(f);
  }

  resetForm(f : NgForm) {
    f.reset();
  }

  resetFormv2(f: NgForm) {
    f.form.patchValue(
      {
        "credentials": {
          "login": "",
          "pwd": ""
        },
        "section": "dsen",
        "comment": "Rien à signaler"
      }
    );
  }

}
