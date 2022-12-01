import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  formControlTitre: FormControl<string | null> = new FormControl<string>('',[Validators.required, Validators.minLength(10)]);

  constructor() { }

  ngOnInit(): void {
  }

}
