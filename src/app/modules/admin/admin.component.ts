import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public products: Product[];
  public totalRows: number;
  public currentPage = 1;
  name: any;
  items = ['item1', 'item2'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.totalRows = data.length;
      console.log(this.totalRows);
      return (this.products = data);
    });
  }

  search(): void {
    console.log(this.products);
    this.productService.getProductsByName(this.name).subscribe((data) => {
      return (this.products = data);
    });
    if (this.products.length === 0) {
      alert('No products');
    }
  }

  addItem(newItem: string): void {
    this.items.push(newItem);
  }
}
