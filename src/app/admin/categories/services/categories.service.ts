import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Category } from 'src/app/core/models/category';
import { DeleteRespose } from 'src/app/core/types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiEndpoint}/categories`);
  }

  createCategory(name: string): Observable<Category> {
    return this.http.post<Category>(`${environment.apiEndpoint}/categories`, { name });
  }

  updateCategory(id: string, updatedName: string): Observable<Category> {
    return this.http.put<Category>(`${environment.apiEndpoint}/categories${id}`, { name: updatedName });
  }

  deleteCategory(id: string): Observable<DeleteRespose> {
    return this.http.delete<DeleteRespose>(`${environment.apiEndpoint}/categories/${id}`);
  }
}
