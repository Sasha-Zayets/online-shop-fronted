import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  public post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, body, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  public put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${url}`, body, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  public delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${url}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('Сталася помилка. Будь ласка, спробуйте пізніше.');
  }
}
