import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {ArticlePostService} from "../../services/article-post.service";
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

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

  constructor(private service: ArticlePostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idUrl = this.route.snapshot.paramMap.get('id') || '';
    const idNumber = Number(idUrl)
    this.post.id = !isNaN(idNumber) ? idNumber : 0
    if(this.post.id !== 0) this.getArticle(this.post.id)
  }

  getArticle(id: number) {
    this.service.getById(id).subscribe({
      next: article => this.post = article,
      error: err => {
        console.log(err);
        this.post.id = 0;
      }
    })
  }

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity()) {
      /*alert(this.post)
      console.log(this.post)*/
      //subscribe permet de récupérer la valeur retournée par mon service
      //next est une fonction qui prend en entrée un traitement (ici une lambda) : seul moyen de passer un traitement dans mon subscribe
      // if (this.post.id === 0) {
      //   this.service.create(this.post).subscribe({
      //     next: value => alert('Article id :' + value),
      //     error: err => console.log(err)
      //   })
      // } else {
      //   this.service.update(this.post).subscribe({
      //     next: value => alert('Article id :' + value),
      //     error: err => console.log(err)
      //   })
      // }

      //Autre syntaxe
      const obsIdpost: Observable<number> = (this.post.id === 0)
        ? this.service.create(this.post)
        : this.service.update(this.post).pipe(map(post => post.id || 0))

      obsIdpost.subscribe({
        next: value => alert('Article id :'+value),
        error: err => console.log(err)
      })

      /* const s = (
         // A l'intérieur de ces parenthèses, je récupère l'observable correspondant à la situation (Create / Update)
         (this.post.id === 0)
        ? this.service.create(this.post)
        : this.service.update(this.post).pipe(map(post => post.id || 0))
       ) // Une fois le bon observable récupéré, j'y souscrit
         .subscribe({
        next: value => alert('Article id :' + value),
        error: err => console.log(err)
      }) */

    }
  }
}
