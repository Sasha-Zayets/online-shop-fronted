import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AdminAuthGuardService as AdminAuthGuard } from '../core/services/admin-auth-guard.service';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        canActivate: [AdminAuthGuard],
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        canActivate: [AdminAuthGuard],
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'orders',
        canActivate: [AdminAuthGuard],
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
      },
      {
        path: 'categories',
        canActivate: [AdminAuthGuard],
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule),
      },
      {
        path: 'users',
        canActivate: [AdminAuthGuard],
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
