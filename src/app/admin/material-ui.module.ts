import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
  ]
})
export class AdminMaterialUiModule { }
