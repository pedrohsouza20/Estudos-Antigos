import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursesService {


  getCurses(){
    return ['Angular 2', 'Java', 'Phonegap'];
  }

}
