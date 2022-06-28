import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopinambourComponent } from './topinambour/topinambour.component';
import { UserComponent } from './user/user.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { ListeComponent } from './liste/liste.component';
import { MagieComponent } from './magie/magie.component';
import { ListeFiltreeComponent } from './liste-filtree/liste-filtree.component';
import { Devoir1Component } from './devoir1/devoir1.component';

@NgModule({
  declarations: [
    AppComponent,
    TopinambourComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreeComponent,
    Devoir1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
