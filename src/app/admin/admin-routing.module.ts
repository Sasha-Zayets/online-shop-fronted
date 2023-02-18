import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminComponent,
  },
  {
    path: 'home',
    component: AdminComponent,
  },
  {
    path: 'products',
    component: AdminComponent,
  },
  {
    path: 'categories',
    component: AdminComponent,
  },
  {
    path: 'orders',
    component: AdminComponent,
  },
  {
    path: 'users',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
