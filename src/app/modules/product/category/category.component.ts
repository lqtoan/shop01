import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public categories: Category[];
  public totalRows: number;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getCategories().subscribe((data) => {
      console.table(data);
      (this.categories = data), (this.totalRows = data.length);
    });
  }
}
