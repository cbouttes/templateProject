import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  post: Post = {
    description: "",
    imageAlt: "",
    imageSrc: "",
    postLink: "",
    titre: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity()){
      alert(this.post)
      console.log(this.post)
    }
  }
}
