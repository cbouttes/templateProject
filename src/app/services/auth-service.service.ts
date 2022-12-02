import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  currentUserName: BehaviorSubject<string> = new BehaviorSubject<string>('Anonyme')

  constructor() { }

  login(username: string, password: string) {
    this.currentUserName.next(username)
  }

  logout() {
    this.currentUserName.next('Anonyme')
  }

}
