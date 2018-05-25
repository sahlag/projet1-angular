// Modules angular
import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Modèle perso
import { Product, TAB_PRODUCT } from '../../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit, DoCheck {

  // Propriété entrante passée par le parent
  @Input()  private product: Product;
  // Evenement sortant pour le parent
  @Output() private voted: EventEmitter<number>;

  // On stocke le routeur et le route pour les utiliser où on veut dans la classe
  private router: Router;
  private route: ActivatedRoute;

  // Booléen pour savoir si le parent est ProductList ou si le component a été chargé par l'URL
  @Input() private isListParent: boolean;

  constructor(
    route: ActivatedRoute,
    router: Router
  ) {
    // Initialisation de l'événément pour le parent
    this.voted = new EventEmitter<number>();
    // On stocke le router dans la classe
    this.router = router;
    // On stocke la route active dans la classe
    this.route = route;
  }


  /**
   * Fonction qui se déclenche lorsque le traitement du constructeur est terminé
   */
  ngOnInit(): void {
    if (!this.isListParent) {
      // Récupération de l'id passé en paramètre de la route
      const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
      console.log(`Le nombre correspondant à l'id passé dans la route est : ${id}`);

      if (!isNaN(id)) {
        this.getProduct(id);
      } else {
        this.router.navigate(['/not-found']);
      }
    }
  }
  ngDoCheck(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (this.product && !this.isListParent) {
    if (id !== this.product.id) {
     this.getProduct(id);
    }
  }
  }

  /**
   * On réagit au vote
   * @param note
   */
  private onVoted(note: number): void {
    console.log('Nouveau vote (show) : ' + note);
    this.voted.emit(note);
  }

  /**
   * Cette méthode essaye de charger un produit par rapport à son id
   * @param id
   */
  private getProduct(id: number): void {
    const products: Product[] = TAB_PRODUCT;
    const tableauTrie = products.filter(
      function(elem) {
        if (elem.id === id) {
          return true;
        } else {
          return false;
        }
      }
    );

    // Syntaxe ES6
    // products = products.filter(elem => elem.id === id);

    if (tableauTrie.length === 1) {
      this.product = tableauTrie[0];
    } else {
      this.router.navigate(['/not-found']);
    }

  }

}
