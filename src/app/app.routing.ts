import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { CvComponent } from "./cv/cv.component";
import { HomeProjectComponent } from "./home-project/home-project.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { LoginComponent } from "./login/login.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MsWordComponent } from "./ms-word/ms-word.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UpdateComponent } from "./update/update.component";
import { LoginGuard } from './login.guard';
import { LogoutGuard } from "./logout.guard";

const myRoutes : Routes = [
    {path : 'project', component: HomeComponent, children: [
        {path : '', component: HomeProjectComponent},
        {path : 'cv', children: [
            {path : '', component: CvComponent},
            {path : 'add', component: AddComponent, canActivate: [LoginGuard]},
            {path : ':id', component: InfosComponent},
            {path : 'edit/:id', component: UpdateComponent}
        ]},
        {path : 'servers', component: ManageServersComponent},
        {path : 'msword', component: MsWordComponent},
        {path : 'login', component: LoginComponent, canActivate: [LogoutGuard]}
    ]},
    {path : 'nidhal', loadChildren : './nidhal/nidhal.module#NidhalModule'},
    {path : 'not-found', component: NotFoundComponent},
    {path : '**', redirectTo: 'not-found'}
];

export const CIFOP_ROUTING = RouterModule.forRoot(myRoutes);