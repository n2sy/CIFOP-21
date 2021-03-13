import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListServeursService {
  private listServeurs = [
    {
      id : 1,
      name : "Serveur de production",
      status : "online"
    },
    {
      id : 2,
      name : "Serveur de test",
      status : "offline"
    },
    {
      id : 3,
      name : "Serveur de déploiement",
      status : "online"
    }
  ]
  constructor() { }

  getListServeurs() {
    return this.listServeurs;
  }

  getServeurById(id) {
    return this.listServeurs.find(s => s.id ==id)
  }
}
