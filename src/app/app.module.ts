import { PastryShopComponent } from './pastry-shop/pastry-shop.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { PastryShopModule } from './pastry-shop/pastry-shop.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    PastryShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
