import { CursesService } from './../curses.service';
import { Component, OnInit } from '@angular/core';
import { Curse } from '../curse';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-curses-list',
  templateUrl: './curses-list.component.html',
  styleUrls: ['./curses-list.component.scss'],
  preserveWhitespaces: true
})
export class CursesListComponent implements OnInit {

  //curses!: Curse[];

  curses$!: Observable<Curse[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursesService) { }

  ngOnInit(): void {
    /*this.service.list()
    .subscribe(datas => this.curses = datas);*/

    this.curses$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

}
