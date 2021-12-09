import { Product } from './../product';
import { HttpServerService } from './../../../core/services/httpserver.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  public products: Product[];

  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
    this.httpServerService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
