import { Injectable } from '@angular/core';
import { TAB_PRODUCT, Product } from '../model/product';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = 'api/products';
constructor(private http: HttpClient) {

}


/**
 * Retourne la liste des produits depuits un tableau en mémoire
 */
  public getProducts(): Observable <Product[]> {
    console.log('hello getProducts');

    return this.http.get<Product[]>(this.URL).pipe(
      tap((products) => console.log ('API a répondu: liste des produits')),
      catchError(this.handleError('getProducts', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    console.error(`${operation} echoué: ${error.message}`);
    return of(result as T);
    };
    }
}
