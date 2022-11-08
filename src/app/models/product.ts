export class Product {
    id: number;
    name: string;
    size: string;
    price: number;
    imageURL: string;

    constructor(id = 0, name = 'default', size = '', price = 0, imageURL = 'https://cdn.shopify.com/s/files/1/0951/7126/products/1_BKL_19_W_SterlingSweatshirt_Black_768x.progressive.jpg?v=1582298539') {
        this.id = id
        this.name = name
        this.size = size
        this.price = price
        this.imageURL = imageURL
    }
}
