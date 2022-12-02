import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class ArticlePostService {

  SERVICE_URL = environment.apiUrl + 'posts'

  constructor(private http: HttpClient) { }

  all(): Observable<Post[]> {
    return this.http.get<Post[]>(this.SERVICE_URL)
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(this.SERVICE_URL + '/' + id)
  }

  create(object: Post): Observable<number> {
    return this.http.post<Post>(this.SERVICE_URL, object)
      .pipe(map(post => post.id || 0))
  }

  update(body: Post): Observable<Post> { //Pour Json-Server
    // La route de l'Update attends à la fois l'objet dans le body, mais aussi l'id dans L'URL
    return this.http.put<Post>(this.SERVICE_URL  + '/' + body.id, body)
  }

  delete(id: number): Observable<Post> {
    return this.http.delete<Post>(this.SERVICE_URL + '/' + id)
  }
}
