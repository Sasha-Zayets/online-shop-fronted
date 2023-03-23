import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { DeleteRespose } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private readonly apiService: ApiService) { }

  getAllProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>('/products');
  }

  createProduct(product: FormData): Observable<Product> {
    return this.apiService.post(`/products`, product);
  }

  deleteProduct(idProduct: number): Observable<DeleteRespose> {
    return this.apiService.delete<DeleteRespose>(`/products/${idProduct}`);
  }

  getFullProductById(idProduct: string): Observable<Product> {
    return this.apiService.get(`/products/${idProduct}`);
  }
}
