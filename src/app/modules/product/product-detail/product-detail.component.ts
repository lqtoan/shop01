import { HttpService } from '../../../core/services/http.service';
import { switchMap, map } from 'rxjs/operators';
import { Product } from '../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product = new Product();
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => {
          return this.httpService.getProductById(id);
        })
      )
      .subscribe((product) => (this.product = product));
  }

  backToList(): void {
    alert('Back to List');
  }
}
