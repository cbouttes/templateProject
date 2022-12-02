import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {ArticlePostService} from "../../services/article-post.service";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  post: Post = {
    id: 0,
    description: "",
    imageAlt: "",
    imageSrc: "",
    postLink: "",
    titre: ""
  }

  constructor(private service: ArticlePostService) { }

  ngOnInit(): void {
  }

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity()){
      // alert(this.post)
      // console.log(this.post)
      //subscribe permet de récupérer la valeur retournée par mon service
      //next est une fonction qui prend en entrée un traitement (ici une lambda) : seul moyen de passer un traitement dans mon subscribe
      this.service.create(this.post).subscribe({
        next: value => {
          alert('Article id : ' + value),
            console.log('Article id : ' + value)
        },

      })
    }
  }
}
