import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

import { Product } from '../../../models/product';
import { ProductService } from '../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public totalRows: number;
  public currentPage = 1;
  public name: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get products by categoryId or get ALL if categoryId null
    this.activatedRoute.paramMap
      .pipe(
        map((params) => {
          console.log(params);
          return params.get('categoryId');
        }),
        switchMap((categoryId) => {
          console.log(categoryId);
          if (categoryId) {
            return this.productService.getProductsByCategory(categoryId);
          } else {
            return this.productService.getProducts();
          }
        })
      )
      .subscribe((products) => {
        this.products = products;
        this.totalRows = products.length;
        console.log(products);
      });

    this.activatedRoute.queryParamMap.subscribe((query) => {
      const orderBy = query.get('orderby');
      console.log(orderBy);
    });
  }

  search(): void {
    console.log(this.products);
    this.productService
      .getProductsByName(this.name)
      .subscribe((data) => (this.products = data));
    if (this.products.length === 0) {
      alert('No products');
    }
  }
}
