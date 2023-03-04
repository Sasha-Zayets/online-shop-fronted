import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
          console.log(error);

          this.snackBar.open('Виникла помилка, спробуйте знову', '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          return throwError(error);
        }),
      );
  }
}
