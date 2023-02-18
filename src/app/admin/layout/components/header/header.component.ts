import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AppHeaderComponent {
  @Output()
  toggleSidebar = new EventEmitter();

  toggleMenu() {
    this.toggleSidebar.emit();
  }
}
