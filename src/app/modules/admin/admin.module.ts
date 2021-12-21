import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { FormsModule } from '@angular/forms';

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
