import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { DetailServeurComponent } from "./serveur/detail-serveur/detail-serveur.component";
import { EditServeurComponent } from "./serveur/edit-serveur/edit-serveur.component";
import { ServeurComponent } from "./serveur/serveur.component";


const nidhalRoutes : Routes = [
    {path: 'nidhal', component: NavbarComponent, children: [
        {path:'', component: AccueilComponent},
        {path: 'serveurs', component : ServeurComponent, children : [
            {path: ':myid', component : DetailServeurComponent},
            {path: ':myid/edit', component : EditServeurComponent},
        ]}
    ]},
    
]

export const SERV_ROUTING = RouterModule.forChild(nidhalRoutes);