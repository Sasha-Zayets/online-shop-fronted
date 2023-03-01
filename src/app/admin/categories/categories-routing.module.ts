import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoriesComponent } from './pages/create-categories/create-categories.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CategoriesComponent },
  { path: 'create', component: CreateCategoriesComponent },
  { path: ':categoryId', pathMatch: 'full', component: EditCategoryComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }