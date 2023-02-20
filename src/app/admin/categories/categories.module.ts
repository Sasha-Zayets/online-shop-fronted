import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { AdminMaterialUiModule } from '../material-ui.module';
import { CreateCategoriesComponent } from './pages/create-categories/create-categories.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategoriesComponent
  ],
  imports: [
    CommonModule,
    AdminMaterialUiModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CategoriesModule { }
