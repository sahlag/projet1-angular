import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductShowComponent,
    ProductEditComponent,
    ProductlistComponent
  ]
})
export class ProductModule { }
