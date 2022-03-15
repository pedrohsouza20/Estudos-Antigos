import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  buttonActive: boolean = false;
  fontSize: number = 16;

  changeButtonStatus(){
    this.buttonActive = !this.buttonActive;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
