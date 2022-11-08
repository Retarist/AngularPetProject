import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';

const apiUrl = 'http://localhost:3000/cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(apiUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }
          
          if (!productExists) {
            cartItems.push(new Cart(item.id, item.product))
          }
        }
        
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(apiUrl, {product});
  }
}
