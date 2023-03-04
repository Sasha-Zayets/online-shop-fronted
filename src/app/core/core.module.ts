import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from './services/api.service';
import { CategoriesService } from './services/categories.service';
import { CookieService } from './services/cookie.service';
import { AuthInterceptor } from './interceptops/auth.interceptor';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpErrorInterceptor } from './interceptops/http-error.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    ApiService,
    CategoriesService,
    CookieService,
    AuthService,
    AdminAuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class CoreModule { }
