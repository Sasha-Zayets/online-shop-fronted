import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import {AdminMaterialUiModule} from '../material-ui.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminMaterialUiModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
