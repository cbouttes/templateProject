import { Component, OnInit } from '@angular/core';
import {ArticlePostService} from "../../services/article-post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-http',
  templateUrl: './post-http.component.html',
  styleUrls: ['./post-http.component.css']
})
export class PostHttpComponent implements OnInit {

  posts:
    Post[] = []

  constructor(private service: ArticlePostService) {  }

  ngOnInit(): void {
    //La requête ves le serveur n'est lancée qu'à partir du moment ou on souscrit à l'observable
    this.service.all().subscribe({
      next: postResponse => { this.posts = postResponse },
      error: (err) => console.log(err) // On s'assure de toujours avoir une trace en cas d'erreur
    })
  }

  deletePost(id?: number) { //Paramètre optionnel : id? (Le ? indique la possibilité du 'undefined')
    if(id) {
      this.service.delete(id).subscribe({
        next: () => {
          alert("Article Supprimé");
          this.ngOnInit()
        }
      })
    }
  }

}
