import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  openedSidebar = true;

  toggleSidebar() {
    this.openedSidebar = !this.openedSidebar;
  }
}
