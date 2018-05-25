import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProducts(): void {
    console.log ('hellew:: getProducts');
  }

}
