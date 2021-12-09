import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
