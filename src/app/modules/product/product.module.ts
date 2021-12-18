import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, NgxPaginationModule],
})
export class ProductModule {}
