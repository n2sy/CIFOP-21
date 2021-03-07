import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NidhalComponent } from './nidhal/nidhal.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { ShortPipe } from './pipes/short.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FirstService } from './services/first.service';
import { NoImagePipe } from './no-image.pipe';
import { RecrueComponent } from './recrue/recrue.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ListAccountComponent } from './accounts/list-account/list-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NidhalComponent,
    CardComponent,
    ParentComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DirectComponent,
    MsWordComponent,
    CustomDirDirective,
    ManageServersComponent,
    ShortPipe,
    FilterPipe,
    NoImagePipe,
    RecrueComponent,
    HomeAccountComponent,
    AddAccountComponent,
    ListAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
