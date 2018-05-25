import { Component} from '@angular/core';
import { Product, PRODUCT_TEST, TAB_PRODUCT } from '../../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  {
 private products: Product[];
  public selectedProduct: Product;
  // prppriété pour la moyenne
  private moyenne: number;
  private notes: Array<number|string>;

  constructor(productService: ProductService) {
    this.products = [];
// this.selectedtProduct = PRODUCT_TEST;
productService.getProducts().subscribe(
  (data) => {
    this.products = data;
  }
);
// initialisation de tableau de produits

// ilitialisation de l moyenne
this.moyenne = 0;
this.notes = [];
  }
  changeProduct(product) {
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }
  private updateMoyenne(newNote: number): void {
console.log('Nouvelle note reçu :' + newNote);
this.calculateMoyenne(newNote);
  }

  private calculateMoyenne(note: number): void {
    let somme = 0;
    this.notes.push(note);
    this.notes.forEach((elem) => somme += parseInt(<string>elem, 10));
    this.moyenne = somme / this.notes.length;
  }

}
