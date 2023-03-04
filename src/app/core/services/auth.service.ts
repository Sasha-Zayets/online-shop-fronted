import { Injectable } from '@angular/core';
import { ACCSESS_TOKEN, Login, LoginResponse } from '../types/types';
import { ApiService } from './api.service';
import { CookieService } from './cookie.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private cookieService: CookieService, private apiService: ApiService) { }

  getAuthorizationToken(): string | null {
    return this.cookieService.get('access_token');
  }

  isAuthenticated(): boolean {
    const token = this.getAuthorizationToken();

    return Boolean(token);
  }

  login(user: Login): Observable<ACCSESS_TOKEN> {
    return this.apiService.post<LoginResponse>('/auth/login', user).pipe(
      map((res) => {
        this.cookieService.setCookie('access_token', res.access_token, environment.JWT_EXP_H);

        return res.access_token;
      })
    );
  }
}
