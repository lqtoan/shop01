import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

import { Product } from '../../../models/product';
import { HttpService } from '../../../core/services/http.service';
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
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get products by categoryId or get ALL if categoryId null
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('categoryId')),
        switchMap((categoryId) => {
          console.log(categoryId);
          if (categoryId) {
            return this.httpService.getProductsByCategory(categoryId);
          } else {
            return this.httpService.getProducts();
          }
        })
      )
      .subscribe(
        (products) => (
          (this.products = products), (this.totalRows = products.length)
        )
      );

    this.activatedRoute.queryParamMap.subscribe((query) => {
      const orderBy = query.get('orderby');
      console.log(orderBy);
    });
  }

  search(): void {
    console.log(this.products);
    this.httpService.getProductsByName(this.name).subscribe((data) => {
      return (this.products = data);
    });
    if (this.products.length === 0) {
      alert('No products');
    }
  }
}
