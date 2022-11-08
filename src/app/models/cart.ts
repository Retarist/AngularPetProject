import { Product } from "./product";

export class Cart {
    id: number;
    productId: number;
    productName: string;
    size: string;
    qty: number;
    price: number;
    imageURL: string;

    constructor(id: number, product: Product, qty = 1) {
        this.id = id
        this.productId = product.id
        this.productName = product.name
        this.size = product.size
        this.price = product.price
        this.imageURL = product.imageURL
        this.qty = qty
    }
}
