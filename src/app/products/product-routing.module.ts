import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductShowComponent } from './product-show/product-show.component';
const productRoutes: Routes = [
  { path: 'produit', component: ProductlistComponent},
  { path: 'produit/:id' , component: ProductShowComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild( productRoutes )
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
