import { Injectable } from '@angular/core';
import { TAB_PRODUCT, Product } from '../model/product';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
/**
 * Retourne la liste des produits depuits un tableau en mémoire
 */
  public getProducts(): Observable <Product[]> {
    console.log('hello getProducts');
    return of(TAB_PRODUCT).pipe(
     delay(1000)
    );
  }

}
