import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
FormsModule

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  constructor(private router: Router) { }

  isUserAuthenticated: boolean = false;
  userEmail: string = '';
  userPassword: string = '';

  login() {
    if (this.userEmail === 'pedroh@gmail.com' &&
      this.userPassword === '123456' ||
      this.userEmail === 'pedroh2@gmail.com' &&
      this.userPassword === '12345678'
    ) {
      this.isUserAuthenticated = true;
      this.router.navigate(['/pagina2']);
    }
    else{
      this.isUserAuthenticated = false;
    }
  }

  ngOnInit(): void {
  }

}