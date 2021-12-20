import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../core/pipes/pipes.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, RouterModule, NgxPaginationModule, PipesModule],
  imports: [CommonModule, RouterModule, NgxPaginationModule, PipesModule],
})
export class ShareModule {}
