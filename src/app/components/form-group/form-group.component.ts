import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";


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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupère la valeur en cours de la variable titre présente dans l'URL
    const titreActuel = this.route.snapshot.paramMap.get('titre')
    // Il est possible de récupérer des informations avec this.route.snapshot.queryParamMap
    if(titreActuel) { // Si j'ai bien récupéré une valeur
      // Je met a jour la valeur du formControl 'titre'
      this.formGroup.controls['titre'].setValue(titreActuel)
    }

    // Pour recupérer une valeur amenée a changer en dehors du composant
    let titreVariable = ''
    this.route.paramMap.subscribe({
      next: (paramMap) => {
        titreVariable = paramMap.get('titre') || ''
      },
      // Il est important de verifier les erreurs, car après déclenchement, l'observable est inopérant
      error: (err) => console.log(err), // On s'assure de toujours avoir une trace en cas d'erreur
      complete: () => console.log('End of Observable') // Information sur la fin des notifications
    })


    // Dans le cas ou je passe une fonction au lieu d'un objet, je ne traitre que le cas du 'next'
    this.route.paramMap.subscribe((paramMap) => titreVariable = paramMap.get('titre') || '')
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
    // Fonction lambda typée recevant un argument un paramètre de type AbstractControl
    return (control: AbstractControl): ValidationErrors | null => {
      const valeur = control.value;
      const valeurTrim = valeur.trim()
      return (valeurTrim === "") ? {isBlank: {value: valeur}} : null
    }
  }
}
