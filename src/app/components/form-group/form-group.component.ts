import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  formGroup: FormGroup = new FormGroup<any>({
    titre: new FormControl('', [
      Validators.required, this.isBlankValidator()]),
    description: new FormControl('', [
      Validators.required, this.isBlankValidator()]),
    imageAlt: new FormControl(''),
    imageSrc: new FormControl(''),
    postLink: new FormControl('', [Validators.required, this.isBlankValidator()])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.formGroup.valid) {
      console.log(this.formGroup.value)
    } else {
      alert('Formulaire Invalide')
    }
  }
  // Un Validateur est de  type ValidatorFn (C'est une fonction qui retourne une erreur de validation ou rien)
  isBlankValidator() : ValidatorFn {
    return (control): ValidationErrors | null => { // Fonction lambda typée
      const valeur = control.value;
      const valeurTrim = valeur.trim()
      return (valeurTrim === "") ? {isBlank: {value: valeur}} : null
    }
  }
}
