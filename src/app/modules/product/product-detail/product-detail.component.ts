import { HttpServerService } from 'src/app/core/services/httpserver.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product= new Product();
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpServerService: HttpServerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      const id = params.get('id');
      this.httpServerService
        .getProductById(id)
        .subscribe((data) => (this.product = data));
    });
    console.log(this.product);
  }
}
