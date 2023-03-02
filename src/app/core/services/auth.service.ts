import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable()
export class AuthService {
  constructor(private cookieService: CookieService) { }

  getAuthorizationToken(): string | null {
    return this.cookieService.get('auth_token');
  }

  isAuthenticated(): boolean {
    const token = this.getAuthorizationToken();

    return Boolean(token);
  }
}
