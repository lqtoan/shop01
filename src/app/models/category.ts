import { Product } from './product';

export class Category {
  constructor(name?: string) {
    this.name = name;
    // this.products = products;
  }

  id: string;
  name: string;
  createAt: any;
  // products: Product[];
}
