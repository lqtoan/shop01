export class Product {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  constructor(name?, price?) {
    this.name = name;
    this.price = price;
  }
}
