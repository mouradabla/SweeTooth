import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'pastry-shop', loadChildren: () => import('./pastry-shop/pastry-shop.module').then(m => m.PastryShopModule) },
    // redirect to home page in case of any invalid URL
    { path: '**', redirectTo: 'pastry-shop' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
