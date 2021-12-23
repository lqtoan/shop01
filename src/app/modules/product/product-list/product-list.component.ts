import { Product } from '../../../models/product';
import { HttpService } from '../../../core/services/http.service';
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
  public name: string;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get products by categoryId or get ALL if categoryId null
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      const categoryId = params.get('categoryId');
      if (categoryId === null) {
        this.httpService.getProducts().subscribe((data) => {
          // console.log(data);
          this.totalRows = data.length;
          console.log('Products: ' + this.totalRows);
          return (this.products = data);
        });
      } else {
        this.httpService.getProductsByCategory(categoryId).subscribe((data) => {
          // console.log(data);
          this.totalRows = data.length;
          console.log('Products: ' + this.totalRows);
          this.totalRows = data.length;
          return (this.products = data);
        });
        // Solution 2:
        // this.httpService.getCategoryDetails(categoryId).subscribe((data) => {
        //   console.log(data.products);
        // return (this.products = data.products);
        // });
      }
    });
  }
  search(): void {
    console.log(this.products);
    this.httpService.getProductsByName(this.name).subscribe((data) => {
      return (this.products = data);
    });
    if (this.products.length === 0) { alert('No products'); }
  }
}
