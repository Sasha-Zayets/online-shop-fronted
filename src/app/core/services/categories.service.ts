import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import { DeleteRespose } from 'src/app/core/types/types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private apiService: ApiService) { }

  getAllCategories(): Observable<Category[]> {
    return this.apiService.get<Category[]>(`/categories`);
  }

  createCategory(name: string): Observable<Category> {
    return this.apiService.post<Category>(`/categories`, { name });
  }

  updateCategory(id: string, updatedName: string): Observable<Category> {
    return this.apiService.put<Category>(`/categories${id}`, { name: updatedName });
  }

  deleteCategory(id: number): Observable<DeleteRespose> {
    return this.apiService.delete<DeleteRespose>(`/categories/${id}`);
  }
}
