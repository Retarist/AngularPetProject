import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { GeneralService } from '../shared/services/general.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public generalService: GeneralService, private productService: ProductService){

  }

  cartItems = [ 
    { qty: 0, price: 0},
    { id: 1, productName: 'Example', qty: 1, price: 1 },
    { id: 2, productName: 'Example 2', qty: 1, price: 1 },
  ];

  cartTotal = 0

  products: Product[] = []

  ngOnInit(): void {
    console.log(this.products)
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products)
    })
    
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
