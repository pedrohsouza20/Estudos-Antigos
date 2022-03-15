import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }

  static nameValidator: Array<any> = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30)
  ];

}
