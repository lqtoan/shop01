import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const productRoutes: Routes = [
  {
    path: 'shop',
    component: ProductListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
})
export class ProductModule {}
