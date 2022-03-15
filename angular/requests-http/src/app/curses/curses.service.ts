import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curse } from './curse';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursesService {

  private readonly API = 'http://localhost:3000/curses';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Curse[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }
}
