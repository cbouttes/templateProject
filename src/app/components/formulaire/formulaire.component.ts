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
    postLink:"",
    titre: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: HTMLFormElement) {
    if (form.checkValidity()) {//évite de refaire les contrôles sur les attributes de post (sachant que ces contrôles sont déjà fait au niveau formulaire dans le HTLML)
      alert(this.post);
      alert("post.description " + this.post.description);
      console.log("Mes valeurs : post.description " + this.post.description);
    }
  }


}
