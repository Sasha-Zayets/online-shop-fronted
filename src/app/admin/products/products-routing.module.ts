import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsComponent },
];

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }