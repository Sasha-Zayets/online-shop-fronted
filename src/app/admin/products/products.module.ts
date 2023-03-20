import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import {AdminMaterialUiModule} from '../material-ui.module';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ConfirmRemoveDialogComponent } from './components/confirm-remove-dialog/confirm-remove-dialog.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    ConfirmRemoveDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminMaterialUiModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
