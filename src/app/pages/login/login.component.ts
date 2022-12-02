import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""

  constructor(private service: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity()) {
      this.service.login(this.username, this.password);
    }
  }

}
