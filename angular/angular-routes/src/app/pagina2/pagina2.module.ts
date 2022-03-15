import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina2Component } from './pagina2.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Pagina2Component
  ],
  imports: [
    CommonModule,
    Router,
    RouterModule,
    AppModule
  ]
})
export class Pagina2Module { }
