import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {

  curses: string[] = ["Javascript", "HTML5", "CSS3", "Angular", "SASS"];

  constructor() { }

  ngOnInit(): void {
  }

}
