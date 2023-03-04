import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isAuthenticated = false;
  openedSidebar = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAndSetAuthStatus();
  }

  checkAndSetAuthStatus(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  toggleSidebar(): void {
    this.openedSidebar = !this.openedSidebar;
  }

  onLogin(): void {
    this.checkAndSetAuthStatus();
  }

  logOut(): void {
    this.checkAndSetAuthStatus();
  }
}
