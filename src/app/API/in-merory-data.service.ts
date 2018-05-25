import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class InMeroryDataService implements InMemoryDbService {

  createDb(): {} | Observable<{}> | Promise<{}> {

    const products: Product[] = [
      new Product(2, 'Pomme', 'Pour la forme'),
      new Product(3, 'Orange', 'Pour la santé'),
      new Product(4, 'banane', 'Pour l\'énergie'),
      new Product(5, 'pastéque', 'Pour la peaux'),
      new Product(6, 'melon', 'un vrai régale '),
      new Product(7, 'pêche', 'le roi des fruits'),
  ];

    return { products };
  }
  constructor() { }
}
