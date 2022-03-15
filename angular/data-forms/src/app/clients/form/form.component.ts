import { FormValidationsService } from './../../shared/services/form-validations.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Client } from '../shared/client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.createForm(new Client());
  }
  
  createForm(client: Client) {
    this.form = this.formBuilder.group({
      name: [client.name, Validators.compose(
        FormValidationsService.nameValidator
     )],
      type: [client.type],
      gender: [client.gender],
      bornDate: [client.bornDate],
      observation: [client.observation],
      isActive: [client.isActive]
    })
  }

  onSubmit(){
    console.log(this.form);
    //this.form.patchValue(new Client());
  }
}
