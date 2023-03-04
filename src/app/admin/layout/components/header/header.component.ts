import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AppHeaderComponent {
  @Input()
  isAuth = false;

  @Output()
  toggleSidebar = new EventEmitter();

  @Output()
  logOut = new EventEmitter();

  constructor(private authService: AuthService) { }

  toggleMenu(): void {
    this.toggleSidebar.emit();
  }

  onLogOut(): void {
    this.authService.logOut();
    this.logOut.emit();
  }
}
