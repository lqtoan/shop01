import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share.module';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    PipesModule,
  ],
})
export class ProductModule {}
