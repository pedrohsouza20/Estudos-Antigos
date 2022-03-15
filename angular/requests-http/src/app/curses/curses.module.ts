import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursesRoutingModule } from './curses-routing.module';
import { CursesListComponent } from './curses-list/curses-list.component';


@NgModule({
  declarations: [CursesListComponent],
  imports: [
    CommonModule,
    CursesRoutingModule
  ]
})
export class CursesModule { }
