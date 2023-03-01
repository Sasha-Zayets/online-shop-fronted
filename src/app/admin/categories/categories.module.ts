import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { AdminMaterialUiModule } from '../material-ui.module';
import { CreateCategoriesComponent } from './pages/create-categories/create-categories.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategoriesComponent,
    CategoryFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    AdminMaterialUiModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CategoriesModule { }
