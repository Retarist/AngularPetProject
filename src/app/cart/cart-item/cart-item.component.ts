import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { GeneralService } from 'src/app/shared/services/general.service';
import { MessengerService } from 'src/app/shared/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItems: any

  constructor(public generalService: GeneralService, private msg: MessengerService, private cartService: CartService){
    
  }

  ngOnInit(): void {
  }

}
