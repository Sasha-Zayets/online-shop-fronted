import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AppHeaderComponent } from './layout/components/header/header.component';
import { AppAdminFooter } from './layout/components/footer/footer.component';
import { AdminMaterialUiModule } from './material-ui.module';
import { Sidebar } from './layout/components/sidebar/sidebar.component';
import { AdminLoginComponent } from './layout/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    LayoutComponent,
    AppHeaderComponent,
    AppAdminFooter,
    Sidebar,
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminMaterialUiModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
