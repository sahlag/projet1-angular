
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/error404/error404.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
