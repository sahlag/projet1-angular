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

  constructor() {
    this.content = 'cest un texte';
   this.url = 'https://www.facebook.com/Lhomme.expert?ref=bookmarks';
    this.isEditable = true;
}
public changeStyle() {
this.isEditable = !this.isEditable;
}
}

