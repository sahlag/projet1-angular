// Modules angular
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
// Modules perso

import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/error404/error404.component';


// Définition des routes
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'not-found', component: Error404Component},
  { path: '**', component: Error404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
