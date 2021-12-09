import { HttpServerService } from 'src/app/core/services/httpserver.service';
import { IProduct } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpServerService: HttpServerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.httpServerService.getProductById(id))
      )
      .subscribe((data) => (this.product = data));
  }
}
