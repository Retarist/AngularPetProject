import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from '../../shared/services/messenger.service';
import { Product } from '../../models/product';
import { GeneralService } from '../../shared/services/general.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() cartItem: any

  @Input()
  productItem!: Product;

  constructor(public generalService: GeneralService, private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleSend() {
    this.msg.sendMsg(this.productItem)
  }

}
