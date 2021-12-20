import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, RouterModule],
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule,
      providers: [HttpService],
    };
  }
}
