import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursesListComponent } from './curses-list/curses-list.component';

const routes: Routes = [
  { path: '', component: CursesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursesRoutingModule { }
