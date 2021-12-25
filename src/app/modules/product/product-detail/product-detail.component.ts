import { switchMap, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../../../core/services/http.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product = new Product();
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.httpService.getProductById(id))
      )
      .subscribe((product) => (this.product = product));
  }

  backToList(): void {
    this.router.navigate(['/product']);
  }
}
