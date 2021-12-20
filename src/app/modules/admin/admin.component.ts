import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public products: Product[];
  public totalRows: number;
  public currentPage = 1;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.totalRows = data.length;
      console.log(this.totalRows);
      return (this.products = data);
    });
  }
}
