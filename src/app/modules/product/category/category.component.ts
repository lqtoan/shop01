import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categories: Category[];
  public products: Product[];
  public totalRows: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((data) => {
      console.log(data);
      this.totalRows = data.length;
      console.log('Categories: ' + this.totalRows);
      return (this.categories = data);
    });

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const categoryId = params.get('categoryId');
    //   this.productService.getProductsByCategory(categoryId).subscribe((data) => {
    //     return (this.products = data);
    //   });
    // });
    // console.log(this.products);
  }
  
}
