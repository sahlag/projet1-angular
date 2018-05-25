
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/error404/error404.component';
import { ProductModule } from './products/product.module';
// Modules pour API memoire
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMeroryDataService } from './API/in-merory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMeroryDataService),
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
