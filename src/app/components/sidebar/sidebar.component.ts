import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // Texte
  texte: string = "un texte"

  // Image
  image : string = "images/pic08.jpg"
  image2 : string = "images/pic09.jpg"

  // Alt
  alt : string = ""
  alt2 : string = ""
  // Paragraphe
  paragraphe: string = "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  paragraphe2: string = "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  // Href
  href : string = "#"
  href2 : string = "#"

  minipost1 : MiniPost = {
    alt: "",
    image: "pic08.jpg",
    lien: "",
    paragraphe: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  }

  minipost2: MiniPostClass = new MiniPostClass("images/pic08.jpg",
    "",
    "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.",
    '#');

  minipost3 : MiniPostDefaut = new MiniPostDefaut();

  currentUserName = ''

  constructor(private service: AuthServiceService) { }

  ngOnInit(): void {
    this.service.currentUserName.subscribe({
      next: userNameSubject => this.currentUserName = userNameSubject
    })
  }

  onClick() {
    alert("click");
  }

  alert(texte: any) {
    console.log(texte);
  }

  // Au changement
  onChange() {
    alert(this.texte)
  }

  logout(){
    this.service.logout()
  }

}





interface MiniPost {
  image : string;
  alt : string;
  paragraphe: string;
  lien: string;
}

class MiniPostClass {
  image : string;
  alt : string;
  paragraphe: string;
  lien: string;

  constructor(image: string, alt: string, paragraphe: string, lien: string ) {
    this.image = image;
    this.alt = alt;
    this.paragraphe = paragraphe;
    this.lien = lien
  }
}

class MiniPostDefaut {
  image : string = "";
  alt : string = "";
  paragraphe: string = "";
  lien: string = "";
}
