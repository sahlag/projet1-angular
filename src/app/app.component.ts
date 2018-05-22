import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Bonjour tout le monde';
  disciption = 'Un petit exercice l\'initiaton sur Angular';
  content: string;
  url: string;
  isEditable: boolean;
  classesBtn: object;

  constructor() {
    this.content = 'cest un texte';
   this.url = 'https://www.facebook.com/Lhomme.expert?ref=bookmarks';
    this.isEditable = true;
    this.updateClassesBtn();
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
 }
}

