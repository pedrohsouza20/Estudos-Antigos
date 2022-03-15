import { Pagina2Component } from './pagina2/pagina2.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
RouterModule

FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { FormsModule } from '@angular/forms';
import { Browser } from 'selenium-webdriver';
import { Pagina4Component } from './pagina4/pagina4.component';
Pagina2Component
@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
