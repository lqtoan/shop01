import { Product } from '../../../models/product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
// import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  // public categories: Category[];
  public totalRows: number;
  public currentPage = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      // console.log(data);
      this.totalRows = data.length;
      console.log(this.totalRows);
      return (this.products = data);
    });
  }
}
