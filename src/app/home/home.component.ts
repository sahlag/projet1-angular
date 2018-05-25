import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Bonjour tout le monde';
  disciption = 'Un petit exercice l\'initiaton sur Angular';
  content: string;
  url: string;
  isEditable: boolean;
  classesBtn: object;
  objStyle: object;
  private meteo: string;

  constructor() {
    this.content = 'cest un texte';
   this.url = 'https://www.facebook.com/Lhomme.expert?ref=bookmarks';
    this.isEditable = true;
    this.updateClassesBtn();
    // on initializse la temperature
    this.meteo = 'ensoleillé';
}
public changeStyle() {
this.isEditable = !this.isEditable;
this.updateClassesBtn();
console.log(this.classesBtn);
}
 private updateClassesBtn() {
  this.classesBtn = {
    'teal': this.isEditable,
    'orange': !this.isEditable
  };
  this.objStyle = {
    'color': this.isEditable ? 'chocolate' : 'royalblue',
    'border': !this.isEditable ? '2px solid royalblue' : 'none',
    'box-shadow': !this.isEditable ? '10px 10px black' : 'none'
      };
 }
}
