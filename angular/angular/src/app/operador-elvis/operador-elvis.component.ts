import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {

  task = {
    desc: "Descrição da tarefa",
    date: '07/10/2012',
    responsable: {
      user : null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
