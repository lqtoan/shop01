import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [],
  imports: [CommonModule, RouterModule],
})
export class ShareModule {}
