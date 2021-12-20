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
      const categoryId = params.get('categoryId');
      if (categoryId === null) {
        this.httpService.getProducts().subscribe((data) => {
          console.log(data);
          this.totalRows = data.length;
          console.log('Products: ' + this.totalRows);
          return (this.products = data);
        });
      } else {
        this.httpService.getProductsByCategory(categoryId).subscribe((data) => {
          console.log(data);
          this.totalRows = data.length;
          console.log('Products: ' + this.totalRows);
          this.totalRows = data.length;
          return (this.products = data);
        });
      }
    });
  }
  search(): void {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.products = this.products.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
}
