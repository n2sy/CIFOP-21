import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = "http://localhost:3000/api/Users/login";
  credentials;
  constructor(private http : HttpClient,
    private router : Router) { }

  login(identifiants) {

    this.credentials = identifiants;
    return this.http.post(this.link, identifiants)


  }

  logout() {
    
    this.http.post("http://localhost:3000/api/Users/logout", this.credentials)
    .subscribe(
      (result) => {
        console.log(result);
        
        this.router.navigateByUrl("/project/login");
      },
      (error) => {
        console.log(error);
        console.log("Problem with Logout");
        
        
      }
    );
    localStorage.removeItem("mytoken");

  }

  isLogged() {
    let token = localStorage.getItem("mytoken");
    if(token)
      return true;
    return false;
  }
}
