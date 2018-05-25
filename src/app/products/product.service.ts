import { Injectable } from '@angular/core';
import { TAB_PRODUCT, Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
/**
 * Retourne la liste des produits depuits un tableau en mémoire
 */
  public getProducts(): Product[] {
    console.log('hello getProducts');
    return TAB_PRODUCT;
  }

}
