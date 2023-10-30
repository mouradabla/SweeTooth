import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

import { PastryShopComponent } from './pastry-shop.component';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/sid-nav/side-nav.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselComponent } from './common/carousel.component';


const routes: Routes = [
  {
    path: '', component: PastryShopComponent,
    children: [
      { path: '', component: MainContentComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'checkout', component: ShoppingCartComponent },
    ]
  },
  // redirect to home page in case of any invalid URL
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    PastryShopComponent,
    ToolBarComponent,
    MainContentComponent,
    SideNavComponent,
    AboutUsComponent,
    GalleryComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PastryShopModule { }
