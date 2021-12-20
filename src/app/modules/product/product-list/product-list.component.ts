import { Product } from '../../../models/product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public totalRows: number;
  public currentPage = 1;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((data) => {
    //   console.log(data);
    //   this.totalRows = data.length;
    //   console.log(this.totalRows);
    //   return (this.products = data);
    // });

    this.activatedRoute.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');
      this.productService
        .getProductsByCategory(categoryId)
        .subscribe((data) => {
          return (this.products = data);
        });
    });
    console.log(this.products);
  }
}
