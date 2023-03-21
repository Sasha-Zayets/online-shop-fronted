import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import {AdminMaterialUiModule} from '../material-ui.module';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ConfirmRemoveDialogComponent } from './components/confirm-remove-dialog/confirm-remove-dialog.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadImageComponent } from './components/upload-image/upload-image.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    ConfirmRemoveDialogComponent,
    ProductFormComponent,
    UploadImageComponent,
  ],
  imports: [
    CommonModule,
    AdminMaterialUiModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
