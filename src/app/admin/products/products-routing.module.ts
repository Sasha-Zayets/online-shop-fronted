import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsComponent },
  { path: 'create', component: CreateProductComponent },
  { path: ':productId', component: EditProductComponent },
];

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
