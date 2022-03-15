import { Component, OnInit } from '@angular/core';
import { CursesService } from '../shared/curses.service';

@Component({
  selector: 'app-curses',
  templateUrl: './curses.component.html',
  styleUrls: ['./curses.component.scss']
})
export class CursesComponent implements OnInit {

  curses: string[] = [];

  constructor(private cursesService: CursesService) { 
  }

  ngOnInit(): void {
    this.curses = this.cursesService.getCurses();
  }

}