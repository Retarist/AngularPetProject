import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { GeneralService } from '../../shared/services/general.service';
import { MessengerService } from '../../shared/services/messenger.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  constructor(public generalService: GeneralService, private msg: MessengerService, private cartService: CartService) { }

  productItem: any

  ngOnInit(): void {

    this.msg.getMsg().subscribe(product => {
      this.productItem = product
    })

    this.productItem = this.msg.getMsg()
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

}
