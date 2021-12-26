import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../core/services/product.service';
import { CategoryService } from '../core/services/category.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule,
      providers: [ProductService, CategoryService],
    };
  }
}
