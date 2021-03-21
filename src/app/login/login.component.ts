import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultSection : string = "dsen";
  myComment = "Rien à signaler";
  pass : boolean = false;
  constructor(private router : Router,
    private authService : AuthService) { }

  ngOnInit(): void {
  }

  seConnecter(identifiants) {
    console.log(identifiants);
    
    this.authService.login(identifiants).subscribe(
      (result) => {
        localStorage.setItem("mytoken", result["id"]);

        
        this.router.navigate(['project', 'cv'])
      },
      (error) => {
        this.pass = true;
        console.log(error);
        
      }
    )
    
    // if(identifiants.value.login == "nidhal@gmail.com" &&
    // identifiants.value.pwd == "azerty")
    //  this.router.navigate(['project', 'cv'])
    // else
    // {
    //   identifiants.reset();
    //   this.pass = true;

    // }


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
