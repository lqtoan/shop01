import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public categories: Category[];
  public products: Product[];
  public totalRows: number;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getCategories().subscribe((data) => {
      console.table(data);
      console.log('Categories: ' + this.totalRows);
      (this.categories = data), (this.totalRows = data.length);
    });
  }
}
