import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { ProductItemComponent } from './home/product-item/product-item.component';
import { AddItemComponent } from './home/add-item/add-item.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    DialogComponent,
    CartItemComponent,
    ProductItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
