import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    ShareModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    NgxPaginationModule,
    PipesModule,
  ],
})
export class AdminModule {}
