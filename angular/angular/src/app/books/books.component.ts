import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  book: any = {
    title: 'Javascript o guia definitivo',
    rating: 4.5645,
    pages: 314,
    price: 214.99,
    releaseYear: new Date(2016, 5, 23),
    url: 'https...'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
