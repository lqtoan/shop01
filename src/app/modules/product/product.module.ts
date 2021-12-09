import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
