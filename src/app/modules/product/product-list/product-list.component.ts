import { Product } from './../product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public totalRows: number;
  public currentPage: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      // console.log('Total products: ' + data.pagination._totalRows);
      // console.log('Limit: ' + data.pagination._limit);
      // console.log(
      //   'Min of pages: ' +
      //     Math.ceil(data.pagination._totalRows / data.pagination._limit)
      // );
      this.totalRows = data.length;
      console.log(this.totalRows);
      return (this.products = data);
    });

    // this.productService.getProductsByPagination().subscribe((data) => {
    //   console.log(data);
    //   return this.products = data.data;
    // });
  }
}
