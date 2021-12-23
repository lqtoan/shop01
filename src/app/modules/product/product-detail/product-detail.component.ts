import { HttpService } from '../../../core/services/http.service';
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
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      const id = params.get('id');
      this.httpService.getProductById(id).subscribe((data) => {
        return (this.product = data);
      });
    });
    console.log(this.product);
  }
}
