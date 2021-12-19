import { ProductService } from './../product/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public products: Product[];
  public totalRows: number;
  public currentPage = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.totalRows = data.length;
      console.log(this.totalRows);
      return (this.products = data);
    });
  }
}
