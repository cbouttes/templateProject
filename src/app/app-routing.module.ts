import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EditorComponent} from "./pages/editor/editor.component";
import {FormulaireComponent} from "./components/formulaire/formulaire.component";
import {FormControlComponent} from "./components/form-control/form-control.component";
import {FormGroupComponent} from "./components/form-group/form-group.component";
import {PostHttpComponent} from "./components/post-http/post-http.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'editor', component: EditorComponent, children: [
      {path: '', component: FormulaireComponent},
      {path: 'form-control', component: FormControlComponent},
      {path: 'reactive-form', component: FormGroupComponent},
      {path: 'reactive-form/:titre', component: FormGroupComponent},
      {path: ':id', component: FormulaireComponent}
    ]},
  {path: 'json-server', component: PostHttpComponent},
  {path: '**', component: HomeComponent} // Toujours en dernier (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
