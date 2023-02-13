import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AppHeaderComponent } from './layout/header/header.component';
import { AppAdminFooter } from './layout/footer/footer.component';

@NgModule({
  declarations: [AdminComponent, LayoutComponent, AppHeaderComponent, AppAdminFooter],
  imports: [
  CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
