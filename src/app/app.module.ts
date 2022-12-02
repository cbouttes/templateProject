import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SousMenuComponent } from './components/menu/sous-menu/sous-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { EditorComponent } from './pages/editor/editor.component';
import {HttpClientModule} from "@angular/common/http";
import { PostHttpComponent } from './components/post-http/post-http.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SousMenuComponent,
    SidebarComponent,
    HomeComponent,
    FormulaireComponent,
    FormControlComponent,
    FormGroupComponent,
    EditorComponent,
    PostHttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
