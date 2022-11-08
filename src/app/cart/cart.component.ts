import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/services/general.service';

import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { CartService } from '../shared/services/cart.service';
import { MessengerService } from '../shared/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public generalService: GeneralService, private msg: MessengerService, private cartService: CartService){
    
  }

  cartItems: Cart[] = []

  product: Product[] = []

  cartTotal = 0

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((data: any) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: Cart[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  addProductToCart(data: Product) {
    this.cartItems.push({
      id: data.id,
      productId: data.id,
      productName: data.name,
      size: data.size,
      price: data.price,
      qty: 1,
      imageURL: data.imageURL
    })

    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}