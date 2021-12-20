import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { ShareModule } from '../share.module';

import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    ShareModule,
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    PipesModule,
  ],
})
export class AdminModule {}
