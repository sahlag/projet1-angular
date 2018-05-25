import { Component } from '@angular/core';
import { Product, PRODUCT_TEST } from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
// on stock le produit
private product: Product;

  constructor() {
    this.product = PRODUCT_TEST;
   }

}
