import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { ServeurComponent } from './serveur/serveur.component';
import { EditServeurComponent } from './serveur/edit-serveur/edit-serveur.component';
import { DetailServeurComponent } from './serveur/detail-serveur/detail-serveur.component';
import { SERV_ROUTING } from './nidhal.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AccueilComponent, ServeurComponent, EditServeurComponent, DetailServeurComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    SERV_ROUTING
  ]
})
export class NidhalModule { }
