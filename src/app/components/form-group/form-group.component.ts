import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";


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

  constructor(private route: ActivatedRoute) { }//Injection de dépendance

  ngOnInit(): void {
    //Récupère la valeur en cours (snapshot) de la variable titre présente dans l'URL
    const titreActuel = this.route.snapshot.paramMap.get('titre'); //paramMap est la Map des paramètres contenus dans l'url
    // Il est possible de récupérer des informations avec this.route.snapshot.queryParamMap (mais il n'y aura pas de vérification des paramètres dans l'url)
    //=> écriture avec des ?
    if(titreActuel) { //Si j'ai bien récupéré une valeur
      //Je met à jour la valeur du formControl 'titre'
      this.formGroup.controls['titre'].setValue(titreActuel)
    }
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
