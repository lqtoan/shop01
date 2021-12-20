import { Category } from './category';

export class Product {
  constructor(
    // categoryId?: string,
    id?: string
    // name?: string,
    // price?: number,
    // description?: string,
    // imgUrl?: string,
    // createAt?: any
  ) {
    // this.categoryId = categoryId;
    // this.id = id;
    // this.name = name;
    // this.price = price;
    // this.description = description;
    // this.imgUrl = imgUrl;
    // this.createAt = createAt;
  }
  categoryId: string;
  id: string;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  createAt: any;
  category: Category;
}
