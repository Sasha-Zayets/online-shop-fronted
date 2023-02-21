import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { AdminMaterialUiModule } from '../material-ui.module';
import { CreateCategoriesComponent } from './pages/create-categories/create-categories.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminMaterialUiModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CategoriesModule { }
