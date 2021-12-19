import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categories: Category[];
  public totalRows: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((data) => {
      console.log(data);
      this.totalRows = data.length;
      console.log(this.totalRows);
      return (this.categories = data);
    });
  }

}
