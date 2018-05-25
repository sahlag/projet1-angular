// Modules angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product, TAB_PRODUCT } from '../../model/product';
// Modules perso
import { ActivatedRoute, Router } from '@angular/router';
// import { EventEmitter } from 'events';
@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent {
  // propriété entrante passée par le parentz
  @Input() public product: Product;
  // propriété sortante passée par le parent
  @Output() private voted: EventEmitter<number>;
  // on stocke le routeur
  private router: Router;
  private route: ActivatedRoute;
  // booléen pour savoir si le parent est productList ou si le component a été chargé par l' url
@Input() private isListParent: boolean;

  constructor(
    route: ActivatedRoute,
    router: Router
  ) {
    if (this.isListParent) {

      this.voted = new EventEmitter<number>();
    } else {
      this.router = router;
      this.route = route;
    }


    if (!this.isListParent) {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    console.log(`le nombre correspandant à l'id passé a la route: ${id}`);

     if (!isNaN(id)) {
      this.getProduct(id);
    } else {
    this.router.navigate(['/not-found']);
    }
  }
}


private onVoted(note: number) {
console.log('Nouveau vote (show :' + note);
this.voted.emit(note);
}
/**
   * on réagie au vote
   * @param note
   */
// Cette essaye de changer un produit par rapport à son id
  private getProduct(id: number): void {
let products: Product[] = TAB_PRODUCT;

products = products.filter(
  function(elem) {
  if (elem.id === id) {
return true;
  } else {
    return false;
  }
  }
);
// syntax ES6
// products = products.filter( elem => elem.id === id);
if (products.length === 1) {

  this.product = products[0];
} else {
this.router.navigate(['/not-found']);
}
}
}
